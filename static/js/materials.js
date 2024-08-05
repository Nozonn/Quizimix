const picturePath = '/static/assets/'

window.data = {
    protections: {
        "id": "protections",
        "title": "I - PROTECTIONS",
        "materials": {
            "protections": [
                "",
                {
                    "id": "blouse",
                    "title": "La blouse",
                    "picture": "/static/assets/LabCoat.png",
                    // {{ url_for('static', filename='assets/LabCoat.png') }}
                    "alt": "Blouse de protections",
                    "description": "<p>La blouse à manches longues permet de se protéger des projections éventuelles de produits chimiques ou des brulures. <br>Elle doit être nécessairement en coton et non en polyester, qui est une matière inflammable. <br>La blouse aura de préférence des boutons-pression afin d’être enlevée rapidement si nécessaire.</p>"
                }, 
                {
                    "id": "glasses",
                    "title": "Les lunettes de protection",
                    "picture": "/static/assets/glasses.png",
                    "alt": "Images de lunettes de protection",
                    "description": "<p>En chimie, on utilise des lunettes qui protègent les yeux des éventuelles éclaboussures de produits chimiques.</p>"
                },
                {
                    "id": "gloves",
                    "title": "Les gants de protections",
                    "picture": "/static/assets/gloves.png",
                    "alt": "Image de gants de protections en latex",
                    "description": "<p>Les gants protègent les mains des brulures, des irritations ou même des intoxications par voie cutanée.<br>Dans un laboratoire de classe, on utilise généralement des gants jetables fins en latex, PVC ou vinyle.</p>" 
                 
                },
                {
                    "id": "hotGloves",
                    "title": "Les gants de chaleur",
                    "picture": "/static/assets/hotGloves.png",
                    "alt": "Image de gants de chaleur",
                    "description": "<p>Les gants de chaleur protègent les mains de la chaleur lors de la manipulation d'objets chauds ou lors de l'utilisation d'équipements chauffants tels que des chauffe-ballons, des plaques chauffantes, etc.<br>De plus, lorsque des réactions chimiques produisent de la chaleur ou lorsque des substances chaudes doivent être manipulées, les gants de chaleur offrent une protection adéquate.</p>"
                },
            ],
        }
    }, 

    verrerie: {
        "id": "verrerie", 
        "title": "II - VERRERIE",
        "materials": {
            "contenants": [
                "II.1 - Contenants et récipients",
                {
                    "id": "becher",
                    "title": "Le bécher",
                    "picture":  "/static/assets/becher.png",
                    //{{url_for('static', filename='assets/becher.png')}}
                    "alt": "Bécher",
                    "description": "<ul>Le bécher permet de contenir et mélanger des liquides. <br>Il permet aussi  de :<li>Prélever à la pipette,</li><li>Chauffer un liquide s'il est en Pyrex,</li><li>Réaliser une réaction chimique.</li></ul>"
                },  
                {   
                    "id": "erlenmeyer",
                    "title": "L'erlenmeyer",
                    "picture": picturePath+"erlenmeyer.png",
                    "alt": "Image d'un erlenmeyer",
                    "description": "<p>Pour agiter et stocker des solutions.</p>"
                },  
                {   
                    "id": "tube-a-essai",
                    "title": "Le tube à essai (avec portoirs)",
                    "picture": picturePath+"testTube.png",
                    "alt": "Imgage de tubes à essai sur un portoir",
                    "description": "<p>Pour contenir de petites quantités de liquide.</p>"
                },  
                {   
                    "id": "ballon",
                    "title": "Le ballon (à fond rond)",
                    "picture": picturePath+"ballon.png",
                    "alt": "Image d'un ballon à fond rond",
                    "description": "<p>Pour la distillation et les réactions chimiques</p>"
                },
                {
                    "id": "flacon",
                    "title": "La flacon",
                    "picture": "",
                    "alt": "Image d'un flacon",
                    "description": "<p>Pour stocker des solutions ou produis chimiques</p>"
                },
                {
                    "id": "cristallisoir",
                    "title": "Le cristallisoir",
                    "picture": "",
                    "alt": "Image d'un cristallisoir",
                    "description": ""
                },
                {
                    "id": "verre-de-montre",
                    "title": "Le verre de montre",
                    "picture": "",
                    "alt": "Image d'un verre de montre",
                    "description": ""
                },
                {
                    "id": "verre-a-pied",
                    "title": "Le verre à pied",
                    "picture": "",
                    "alt": "Image d'un verre à pied",
                    "description": ""
                },
            ], 
            "mesure" : [
                "II.2 - Outils de mesure (volumes)",
                {
                    "id": "pipettes",
                    "title": "Les pipettes graduées et jaugées",
                    "picture": "",
                    "alt": "Image d'une pipette graduée et d'une jaugée",
                    "description": "<p>Pour prélever des volumes précis de liquide.</p>"
                },
                {
                    "id": "burettes",
                    "title": "La burette",
                    "picture": picturePath+"burette.png",
                    "alt": "Image d'une burette",
                    "description": "<p>Pour les titrages et l'ajout précis de réactifs</p>"
                },
                {
                    "id": "eprouvette-graduee",
                    "title": "L'éprouvette graduée",
                    "picture": "",
                    "alt": "Image d'une éprouvette graduée",
                    "description": ""
                },
                {
                    "id": "fiole-jaugee",
                    "title": "La fiole jaugée",
                    "picture": "",
                    "alt": "Image d'une fiole jaugée",
                    "description": ""
                },
            ]
        }
    }
}



/* ================== STRUCTURE ==================
{
    "id": "",
    "title": "",
    "picture": picturePath+".png",
    "alt": "",
    "description": ""
},
*/