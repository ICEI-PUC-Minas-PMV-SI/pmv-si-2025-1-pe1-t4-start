const form = document.getElementById('form-login');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;

    if (email === '') {
        alert('Preencha o campo de e-mail!');
        return;
    }
    const jsonData = {
        "psicologos": [
            "karine.ferraz@gmail.com",
            "laiscarvalhoclinica@gmail.com",
            "fernandacarvalho@gmail.com",
            "luana.silva.psi@gmail.com",
            "alicia.martins@gmail.com",
            "bruno.silva@yahoo.com",
            "isabela.mendes@outlook.com",
            "joao.pereira@yahoo.com",
            "karla.alves@terra.com.br",
            "lucas.oliveira@gmail.com",
            "mariana.rocha@hotmail.com",
            "nicolas.teixeira@bol.com.br",
            "tiago.nunes@gmail.com",
            "patricia.monteiro@psiemail.com",
            "andressa.souza@clinicapsi.com",
            "vinicius.martins@psicocuidado.com",
            "caroline.ramos@saudemental.com",
            "0000907077@senaimgaluno.com.br"
        ],
        "advogados": [
            "ana.campos@direitobrasil.com",
            "ricardo.torres@jurispro.com",
            "fernando.lima@justmail.com",
            "tatiane.sousa@defensoria.org",
            "maria.gomes@advlegal.com",
            "eduardo.silva@justonline.net",
            "juliana.moura@advmail.org",
            "bruno.castro@direitohoje.com",
            "paula.ferraz@legalmente.com",
            "vinicius.cardoso@juridiconet.com",
            "lais.martins@direitoemail.com",
            "marcos.alves@bradv.com",
            "natalia.santos@advorg.com",
            "camila.freitas@jusbrasil.org",
            "lucas.ribeiro@advcenter.com",
            "aline.pereira@escritoriolegal.com",
            "gustavo.ferreira@legis.net",
            "helena.dias@jurisweb.com"
        ],
        "babas": [
            "camila.souza@cuidadoinfantil.com",
            "marcela.ramos@familiafeliz.net",
            "juliana.mendes@babysafe.org",
            "renata.lima@cuidadoras.com",
            "lara.silva@babycare.com",
            "tatiane.freitas@meubebe.net",
            "roberta.pinto@casinha.com.br",
            "vanessa.almeida@cuidadorakids.com",
            "aline.costa@babysmile.org",
            "sabrina.martins@bebeleve.com"
        ],
        "creches": [
            "creche.sorrisos@educabem.com",
            "jardim.dosanjos@infantilbr.org",
            "escolinha.solnascente@crecheemail.com",
            "creche.bemmequer@cuidadoinfantil.com",
            "creche.pequenospassos@educar.org",
            "nossolar.infantil@abracokids.com",
            "escolinha.arcoiris@infantnet.com",
            "mundoencantado.creche@educamais.com",
            "amorecarinho.creche@familiakids.com",
            "creche.luzdavida@infantil.org",
            "pequenospormais@gmail.com",
            "sonhoencantado@gmail.com",
            "brincandocomvoce@gmail.com",
            "alegriainfantil@gmail.com",
            "rededecrianças@gmail.com",
            "cuidandodocresce@gmail.com",
            "aprendendoevoluindo@gmail.com",
            "criancafeliz@gmail.com",
            "educaçaoemfoco@gmail.com",
            "momentosdecriança@gmail.com"
        ],
        "maes": [
            "maria.souza@gmail.com",
            "joana.pereira@gmail.com",
            "ana.lima@gmail.com",
            "patricia.silva@gmail.com",
            "lucia.martins@gmail.com",
            "renata.oliveira@gmail.com",
            "fabiana.costa@gmail.com",
            "carla.ferreira@gmail.com",
            "helena.santos@gmail.com",
            "paula.alves@gmail.com"
        ]
    };
    function verificarEmail(email) {
        for (const key in jsonData) {
            if (jsonData.hasOwnProperty(key)) {
                const listaEmails = jsonData[key];
                if (listaEmails.includes(email)) {
                    return true;
                }
            }
        }
        return false;
    }
    if (!email.includes('@')) {
    alert('E-mail inválido!');
    return;
  }
    if (verificarEmail(email)) {
        alert('E-mail enviado com sucesso!');
        window.location.href = 'código.html';
    } else {
        alert('E-mail não cadastrado!');
        return;
    }
});
