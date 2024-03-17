def menu():
    print("\n------------")
    print(f'Quantidade de alunos matriculados: {len(students)}')
    print("1 - Incluir Aluno")
    print("2 - Listar Aluno")
    print("3 - Editar Aluno")
    print("4 - Deletar Aluno")
    print("x - Sair do Programa")
    print("------------")
    
def execute(option):    
    match option: 
        case '1':
            includeStudent()    
        case '2':            
            listStudent()
        case '3':
            editStudent()
        case '4':
            deleteStudent()
        case 'x':
            print("\nEncerrando programa...")   
        case _:
            print("\nInforme uma opção válida!")
            
def includeStudent():
    student = {}
    
    print("\n--Novo aluno--")
    student['name'] = input("Digite o nome do aluno: \n")
    student['registration'] = input("Digite a matricula do aluno: \n")
    student['yearOfEntry'] = int(input("Digite o ano de ingresso: \n"))
    student['semester'] = input("Digite o semestre de ingresso: \n")
    print("Digite o turno do aluno: M - Matutino V - Vespertino N - Noturno")
    student['shift'] = input("Turno: \n").upper()

    students.append(student)
    
def listStudent():
    if students is not None and len(students) > 0:
        print("\nAlunos Matriculados:")
        
        for i in students:
            print("\n------------")
            print(f'Nome: {i["name"]}')
            print(f'Matricula: {i["registration"]}')
            print(f'Ano de ingresso: {i["yearOfEntry"]}')
            print(f'Semestre de ingresso: {i["semester"]}º')
            print(f'Turno: {i["shift"]}')

    else:
        print("\nNenhum aluno cadastrado")

def studentFound(student):
    print("\nAluno encontrado:")
    print("------------")
    print(f'Nome: {student["name"]}')
    print(f'Matricula: {student["registration"]}')
    print(f'Ano de ingresso: {student["yearOfEntry"]}')
    print(f'Semestre de ingresso: {student["semester"]}º')
    print(f'Turno: {student["shift"]}')
    
def editStudent():
    if students is not None and len(students) > 0:
        name = input("\nInforme o nome do aluno que deseja editar: ")
        registration = input("\nInforme a matrícula do aluno que deseja editar: ")
        
        for student in students:
            if student.get("name") == name and student.get("registration") == registration:
                studentFound(student)
                
                print("\n--Editar dados do aluno--")
                newName = input("Informe o nome do aluno: \n")
                newRegistration = input("Informe a matrícula do aluno: \n")
                newYearOfEntry = int(input("Informe o ano de ingresso do aluno: \n"))
                newSemester = input("Informe o semestre de ingresso do aluno: \n")
                print("Digite o turno do aluno: M - Matutino V - Vespertino N - Noturno")
                newShift = input("Turno: \n").upper()
                
                student["name"] = newName
                student["registration"] = newRegistration
                student["yearOfEntry"] = newYearOfEntry
                student["semester"] = newSemester
                student["shift"] = newShift
                break
        else:
            print("\nAluno não encontrado.")
    else:
        print("\nNenhum aluno cadastrado")

def deleteStudent():
    if students is not None and len(students) > 0:
        name = input("Informe o nome do aluno: ")
        registration = input("Informe a matrícula do aluno: ")
        
        for student in students:
            studentFound(student)
            if student.get("name") == name and student.get("registration") == registration:
                print("\nTem certeza que deseja deletar esse aluno? Sim / Não:")
                option = input().lower()
            
                if (option == 'sim'):
                    students.remove(student)
                    print("Aluno deletado...")
                    break
                elif(option == "não"):
                    print("Ok...")
                    break
                else:
                    print("Opção inválida!")
        else:
            print("\nAluno não encontrado")
    else:
        print("\nNenhum aluno cadastrado")
        
option = ""      
students = []

while option != 'x':
  menu()
  option = input("\nDigite uma opção: ")
  execute(option)