class Stack:
    def __init__(self):
        self.stack = []
        self.top = 0

    def push(self,el):
        self.stack.append(el)
        self.top += 1

    def pop(self):
        if not self.is_empty():
            x = self.stack[self.top-1]
            self.stack.pop()
            self.top -= 1
            return x
        else:
            return None

    def is_empty(self):
        return self.top == 0

class Queue:
    def __init__(self):
        self.q = []
        self.size = 0

    def insert(self,el):
        self.q.append(el)
        self.size += 1

    def delete(self):
        if not self.is_empty():
            x = self.q[0]
            for i in range(0,self.size-1):
                self.q[i] = self.q[i+1]
            self.q.pop()
            self.size -= 1
            return x
        else:
            return None

    def is_empty(self):
        return self.size == 0