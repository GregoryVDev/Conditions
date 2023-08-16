let age = 17
let pays = "US"

if (pays === "FR" && age >= 18 || pays === "US" && age >= 16) 
{
    console.log("Vous avez le droit de conduire")
}

// ou 

let agee = 18
let payys = "FR"
let PeutConduireFrance = payys === "FR" && agee >= 18
let PeutConduireUS = payys === "US" && agee >= 16

if (PeutConduireFrance || PeutConduireUS) 
{
    console.log("Vous avez le droit de conduire")
} else
{
    console.log("Vous n'avez pas le droit de conduire")
}

// On peut aussi écrire

if (PeutConduireFrance) 
{
    console.log("Vous avez le droit de conduire en France")
} else if(PeutConduireUS)
{
    console.log("Vous avez le droit de conduire aux Etats-Unis")
} else
{
    console.log("Vous n'avez pas le droit de conduire")
}

// if (!PeutConduireFrance && !PeutConduireUS)
// conole.log("Vous n'avez pas le droit de conduire")


// VRAI ET VRAI = VRAI
// VRAI ET FAUX = FAUX
// FAUX ET FAUX = FAUX

// VRAI OU FAUX = VRAI
// VRAI OU VRAI = VRAI
// FAUX OU FAUX = FAUX

switch(pays)
{
    case 'FR' :
        console.log('Je suis en France')
        break
    case 'US' :
        console.log('Je suis aux Etats-Unis')
        break
    default:
        console.log('Je suis dans un pays inconnu')
        break
}


console.log('--------------------------')


// exo : 

// On est un service de streaming et on a que 3 films à proposer

// 1 dessin animé Lilo et Stitch
// 1 film Matrix
// 1 film Evil Dead

// créé une recommandation sur l'âge de l'utilisateur

// age <= 13 il faut qu'il regarde Lilo et Stitch

// age <= 17 il faut qu'il regarde Matrix

// age >= 18 Il peut mater Evil Dead


let anime = 'Lilo et Stitch'
let film = 'Matrix'
let horror = 'Evil Dead'
let ageExo = prompt("Entrez votre âge :")

if(ageExo <= 13)
{
    console.log('Vous avez droit de regarder Lilo et Stitch')
} else if(ageExo < 18)
{
    console.log('Vous avez droit de regarder Matrix')
} else if(ageExo >= 18)
{
    console.log('Vous avez droit de regarder Evil Dead')
}


console.log('---------------------')

// Exo : 

// "A x B = E est positive/negative"


let a = prompt('Entrez un premier nombre')
let b = prompt('Entrez un deuxième nombre')
let result = a * b

if(result > 0)
{
    console.log(`${a}x${b}=${result} est positif`)
} else
{
    console.log(`${a}x${b}=${result} est négatif`)
}

// On peut 

let signe

if(isNaN(result))
{
    console.log(`Opération impossible: ${a}x${b} `)
} else
{
    if(result > 0)
    {
        signe = "positif"
    } else
    {
        signe = "négatif"
    }
    console.log(`${a}x${b}=${result} est ${signe}`)
}
