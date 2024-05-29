const fragen = [
    {
        "frage": "Was ist die Hauptstadt von Deutschland?",
        "optionen": ["Berlin", "München", "Hamburg", "Köln"],
        "antwort": "Berlin"
    },
    {
        "frage": "Wer hat die Relativitätstheorie entwickelt?",
        "optionen": [
            "Isaac Newton",
            "Albert Einstein",
            "Nikola Tesla",
            "Thomas Edison"
        ],
        "antwort": "Albert Einstein"
    },
    {
        "frage": "Was ist der größte Planet in unserem Sonnensystem?",
        "optionen": ["Erde", "Mars", "Jupiter", "Saturn"],
        "antwort": "Jupiter"
    },
    {
        "frage": "Wer hat das Buch '1984' geschrieben?",
        "optionen": [
            "George Orwell",
            "Aldous Huxley",
            "J.K. Rowling",
            "Stephen King"
        ],
        "antwort": "George Orwell"
    },
    {
        "frage": "Was ist die Quadratwurzel von 81?",
        "optionen": ["7", "8", "9", "10"],
        "antwort": "9"
    },
    {
        "frage": "Wer hat das World Wide Web erfunden?",
        "optionen": [
            "Bill Gates",
            "Steve Jobs",
            "Tim Berners-Lee",
            "Mark Zuckerberg"
        ],
        "antwort": "Tim Berners-Lee"
    },
    {
        "frage": "In welchem Jahr fiel die Berliner Mauer?",
        "optionen": ["1987", "1989", "1991", "1993"],
        "antwort": "1989"
    },
    {
        "frage": "Wer hat das iPhone erfunden?",
        "optionen": ["Microsoft", "Apple", "Samsung", "Nokia"],
        "antwort": "Apple"
    },
    {
        "frage": "Wer hat das Gemälde 'Die Mona Lisa' gemalt?",
        "optionen": [
            "Vincent Van Gogh",
            "Pablo Picasso",
            "Leonardo da Vinci",
            "Claude Monet"
        ],
        "antwort": "Leonardo da Vinci"
    },
    {
        "frage": "Was ist der höchste Berg der Welt?",
        "optionen": ["K2", "Mount Everest", "Kilimandscharo", "Mont Blanc"],
        "antwort": "Mount Everest"
    },
    {
        "frage": "Wer hat das Buch 'Der Herr der Ringe' geschrieben?",
        "optionen": [
            "J.K. Rowling",
            "George R.R. Martin",
            "J.R.R. Tolkien",
            "Stephen King"
        ],
        "antwort": "J.R.R. Tolkien"
    },
    {
        "frage": "Was ist der kleinste Kontinent der Welt?",
        "optionen": ["Afrika", "Australien", "Antarktis", "Europa"],
        "antwort": "Australien"
    },
    {
        "frage": "Wer hat die Glühbirne erfunden?",
        "optionen": [
            "Nikola Tesla",
            "Thomas Edison",
            "Alexander Graham Bell",
            "Benjamin Franklin"
        ],
        "antwort": "Thomas Edison"
    },
    {
        "frage": "In welchem Jahr wurde das Internet öffentlich zugänglich?",
        "optionen": ["1983", "1991", "1995", "2000"],
        "antwort": "1991"
    }
];
module.exports = fragen;



function antworten(fragen_nr) {
    if (fragen_nr != 0 && fragen_nr < 14){
        document.getElementById('fragen_nummer').textContent = parseInt(fragen_nr) + 1; // Fragennummer um 1 erhöhen
    }

    if (fragen_nr < fragen.length) {
        const fr = fragen[fragen_nr];   
        document.getElementById('frage').value = fr.frage;  // Frage angeben

        // Optionen angeben
        document.getElementById('antwort1').textContent = fr.optionen[0];
        document.getElementById('antwort2').textContent = fr.optionen[1];
        document.getElementById('antwort3').textContent = fr.optionen[2];
        document.getElementById('antwort4').textContent = fr.optionen[3];
    }
}

// bei button-click
function check() {
    var radios = document.getElementsByTagName('input');    // alle Input's einlesen
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {  //Checked Radios ermitteln
            value = radios[i].value;
            radios[i].checked = false;  // Radio-Button wieder enchecken

            const fragen_nr = document.getElementById('fragen_nummer').textContent; // Fragennummer einlesen

            r_antwort = fragen[parseInt(fragen_nr)-1].antwort;  //  Antwort ermitteln
            index = fragen[parseInt(fragen_nr)-1].optionen.indexOf(r_antwort);  // Index der Antwort ermitteln

            if (value == index) {   // wenn Index und Radio-Value gleich sind...
                const punkt = document.getElementById('punkte').textContent;    // derzeitigen Punktestand ermitteln
                document.getElementById('punkte').textContent = parseInt(punkt) + 1;    // Punkte um 1 erhöhen
            }
            
            antworten(parseInt(fragen_nr)); // nächste Frage
        }
    }
}