function double(x) {
    console.log(`O dobro de ${x} é ${x * 2}`)
}
// double(5)

function sayHello(name) {
    console.log(`Olá ${name}!`)
}
// sayHello("Eduardo")

function createUser(name, email, password, type = "admin") {
    const user = {
        name,  // mesmo que nome: nome
        email,
        password,
        type
    }

    console.log(user)
}

createUser("Eduardo", "eduardo@email.com", "12340", "user")