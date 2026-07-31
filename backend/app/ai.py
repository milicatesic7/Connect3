from app.tree import Cvor
from app.structures import Stack
from app.board import *
import random

def br_parova(arr, ch):
    parovi = 0
    for i in range(0,4):
        for j in range(0,4):
            if arr[i][j] == ch:
                if j+1<4 and arr[i][j+1] == ch:
                    parovi += 1
                if i+1<4  and arr[i+1][j] == ch:
                    parovi += 1
                if i+1<4 and j+1<4 and arr[i+1][j+1] == ch:
                    parovi += 1
                if i+1<4 and j-1>=0 and arr[i+1][j-1] == ch:
                    parovi += 1
    return parovi

def susednost(arr):
    h = 3*(br_parova(arr,"O")-br_parova(arr,"X"))
    return h

def stablo(arr, igra, h):
    root = Cvor(trenutna_tabla(arr), 0, igra)
    stek = Stack()
    stek.push(root)
    while not stek.is_empty():
        curr = stek.pop()
        if curr is None:
            break
        if pobeda(curr.tabla,1) or pobeda(curr.tabla,0):
            continue
        if curr.nivo == h:
            continue
        for kolona in range(1,5):
            postaviti, pozicija, kol = slobodna_mesta(curr.tabla, kolona)
            if postaviti:
                novi = trenutna_tabla(curr.tabla)
                ch = "X" if curr.igra==1 else "O"
                novi[pozicija][kol] = ch
                potez = 0 if curr.igra==1 else 1
                sin = Cvor(novi, curr.nivo+1, potez)
                curr.deca.append(sin)
                stek.push(sin)
    return root

def minimax(root):
    stek = Stack()
    stek.push(root)
    pomocni = Stack()
    while not stek.is_empty():
        curr = stek.pop()
        pomocni.push(curr)
        for sin in curr.deca:
            stek.push(sin)
    while not pomocni.is_empty():
        curr = pomocni.pop()
        if pobeda(curr.tabla, 0):
            curr.pobeda = 1000
        elif pobeda(curr.tabla, 1):
            curr.pobeda = -1000
        elif nereseno(curr.tabla):
            curr.pobeda = 0
        elif not curr.deca:
            curr.pobeda = susednost(curr.tabla)
        else:
            vrednosti = [sin.pobeda for sin in curr.deca]
            if curr.igra == 0:
                curr.pobeda = max(vrednosti)
            else:
                curr.pobeda = min(vrednosti)

def igra_racunar(cvor):
    if len(cvor.deca) == 0:
        slobodno = []
        for kolona in range(1,5):
            postaviti, pozicija, kol = slobodna_mesta(cvor.tabla,kolona)
            if postaviti:
                slobodno.append(kolona)
        if not slobodno:
            return None, None
        return random.choice(slobodno), None
    else:
        najbolji = cvor.deca[0].pobeda
        for sin in cvor.deca:
            if sin.pobeda > najbolji:
                najbolji = sin.pobeda
        izbori = []
        for sin in cvor.deca:
            if sin.pobeda == najbolji:
                izbori.append(sin)
        return None, random.choice(izbori)