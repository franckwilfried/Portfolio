import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 2*np.pi, 30)
y1 = np.cos(x)
y2 = np.sin(x)
somme = np.cos(x) + np.sin(x)

plt.plot(x, y1, label="cos(x)")
plt.plot(x, y2, label="sin(x)")
plt.plot(x, somme, label="cos(x) + sin(x)")
plt.legend()

plt.show()
""" Posons"""
u = 2
F1 = np.shape(x)
print(F1)

#Alors
# F1 = (u+mg)/2*(np.cos(x) + np.sin(x))
# plt.plot(x, mg, label="cos(x) + sin(x)")
plt.plot(x, np.F1.shape(x), label="cos(x) + sin(x)")
plt.legend()
plt.show()