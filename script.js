let form = document.getElementById("formulario");

form.addEventListener('submit', function (e){
    e.preventDefault();

     let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let idade = document.getElementById('idade').value;
    let peso = document.getElementById('peso').value;
    let sangue = document.getElementById('sangue').value;
    let telefone = document.getElementById('telefone').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;

     let erroNome = document.getElementById('nome').value;
    let erroEmail = document.getElementById('email').value;
    let erroIdade = document.getElementById('idade').value;
    let erroPeso = document.getElementById('peso').value;
    let erroSangue = document.getElementById('sangue').value;
    let erroTelefone = document.getElementById('telefone').value;
    let erroCidade = document.getElementById('cidade').value;
    let erroEstado = document.getElementById('estado').value;


   
           if(nome.split (" ").length < 2){
            document.getElementById('erroNome').textContent = "Informe nome e sobrenome"
           }
            if (!email.includes('@')) {
                 document.getElementById('erroEmail').textContent = "Email Invalido"
            }
            if(idade <16){
                document.getElementById('erroIdade').textContent = "Idade minima é 16 anos"
            }
            if(peso < 50){
                document.getElementById('erroPeso').textContent = 'Peso minimo é 50 kilos'
            }
            if(!nome || !email || !idade || !peso || !sangue || !telefone || !cidade || !estado){
                return alert ("Preencha todos os campos")
            }

            switch (sangue){
        
        case "A+" :
        
        alert("Você poderá doar sangue para os tipos: A+ e AB+"); 
        alert("E você podera receber Sangue do tipos: A+, A-, O+, O-");
        break;

        case "A-" :
        
        alert("Você poderá doar sangue para os tipos: A+, A-, AB+, AB-"); 
        alert("E você podera receber Sangue do tipos: A-, O-");
        break;


        case "B+" :

        alert("Você poderá doar sangue para os tipos: B+, AB+"); 
        alert("E você podera receber Sangue do tipos: B+, B-, O+, O-");
        break;

        case "B-" :

        alert("Você poderá doar sangue para os tipos: B+, B-, AB+, AB-"); 
        alert("E você podera receber Sangue do tipos: B-, O-");
        break;

        case "AB+" :

        alert("Você poderá doar sangue para os tipos: AB+"); 
        alert("E você podera receber Sangue do tipos: A+, A-, B+, B-, AB+, AB-, O+, O-");

        break;

        case "AB-" :

        alert("Você poderá doar sangue para os tipos: AB+, AB-"); 
        alert("E você podera receber Sangue do tipos: A-, B-, AB-, O-");
        break;

        case "O+" :

        alert("Você poderá doar sangue para os tipos: A+, B+, AB+, O+"); 
        alert("E você podera receber Sangue do tipos: O+, O-");
        break;


        case "O-" :

        alert("Você poderá doar sangue para os tipos: A+, A-, B+, B-, AB+, AB-, O+, O-"); 
        alert("E você podera receber Sangue do tipos: O-");
        break;

        default:

        alert("Tipo de Sangue Inválido");

    }

         let resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        Dados enviados: <br>
        nome: ${nome} <br> 
        email: ${email} <br> 
        idade: ${idade} <br> 
        peso: ${peso} <br> 
        sangue: ${sangue} <br> 
        telefone: ${telefone} <br> 
        cidade: ${cidade} <br> 
        estado: ${estado} <br> 
    `;

    form.reset();
});