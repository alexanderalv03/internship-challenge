from django.http import JsonResponse
from math import gcd

# Função para calcular o Mínimo Múltiplo Comum (LCM) de dois números
def lcm(a, b):
    return a * b // gcd(a, b)

# Função para calcular o LCM de um intervalo
def lcm_interval(request):
    try:
        # Pegando os parâmetros da URL (?x=1&y=10)
        x = request.GET.get('x')
        y = request.GET.get('y')

        # Verifica se os parâmetros foram enviados
        if x is None or y is None:
            return JsonResponse({'error': 'Parâmetros x e y são obrigatórios'}, status=400)

        # Converte para inteiros
        x = int(x)
        y = int(y)

        # Validações
        if x <= 0 or y <= 0:
            return JsonResponse({'error': 'Os números devem ser positivos'}, status=400)
        if x >= y:
            return JsonResponse({'error': 'O valor inicial (x) deve ser menor que o valor final (y)'}, status=400)

        # Calcula o LCM do intervalo
        resultado = 1
        for i in range(x, y + 1):
            resultado = lcm(resultado, i)

        return JsonResponse({'lcm': resultado})

    except ValueError:
        return JsonResponse({'error': 'Parâmetros inválidos, use apenas números inteiros'}, status=400)
    except Exception as e:
        return JsonResponse({'error': 'Erro interno', 'details': str(e)}, status=500)
