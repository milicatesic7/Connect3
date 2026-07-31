from app.tree import Cvor

def trenutna_tabla(arr):
    trenutna = []
    for row in arr:
        red = []
        for el in row:
            red.append(el)
        trenutna.append(red)
    return trenutna

def iste_table(arr1, arr2):
    for i in range(0,4):
        for j in range(0,4):
            if arr1[i][j] != arr2[i][j]:
                return False
    return True

def slobodna_mesta(arr,kolona):
    kolona -= 1
    for i in range(3,-1,-1):
        if arr[i][kolona] == ".":
            return True,i, kolona
    return False,4, kolona

def igraj(arr,kolona, igra):
    postaviti, pozicija, kol = slobodna_mesta(arr, kolona)
    if postaviti:
        if igra == 1:
            arr[pozicija][kol] = "X"
            igra = 0
        else:
            arr[pozicija][kol] = "O"
            igra = 1
    return arr, igra

def pobeda(arr, igra):
    ch = "X" if igra==1 else "O"
    for i in range(0,4):
        for j in range(0,4):
            if arr[i][j] == ch:
                if j+2<4 and arr[i][j+1] == ch and arr[i][j+2]==ch:
                    return True
                if i+2<4 and arr[i+1][j] == ch and arr[i+2][j]==ch:
                    return True
                if j+2<4 and i+2<4 and arr[i+1][j+1] == ch and arr[i+2][j+2]==ch:
                    return True
                if j+2<4 and i-2>=0 and arr[i-1][j+1] == ch and arr[i-2][j+2]==ch:
                    return True
    return False

def nereseno(arr):
    for i in range(0,4):
        for j in range(0,4):
            if arr[i][j] == '.':
                return False
    return True