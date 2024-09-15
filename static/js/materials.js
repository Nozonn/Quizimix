const picturePath = '/static/assets/'

const templateMaterials = (id, title, picture, alt, description) => {
    return {
        id: id,
        title: title,
        picture: picturePath+picture,
        alt: "Image "+alt,
        description:"<ul>"+description+"</ul>",
    }
}

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
                    "id": "heatGloves",
                    "title": "Les gants de chaleur",
                    "picture": "/static/assets/heatGloves.png",
                    "alt": "Image de gants de chaleur",
                    "description": "<p>Les gants de chaleur protègent les mains de la chaleur lors de la manipulation d'objets chauds ou lors de l'utilisation d'équipements chauffants tels que des chauffe-ballons, des plaques chauffantes, etc.<br>De plus, lorsque des réactions chimiques produisent de la chaleur ou lorsque des substances chaudes doivent être manipulées, les gants de chaleur offrent une protection adéquate.</p>"
                },

                templateMaterials(
                    "hotte-aspirante",
                    "La hotte aspirante",
                    "hotteAspirante.png",
                    "d'une hotte aspirante",
                    "Elle permet d'évacuer les vapeurs, les gaz et les produits chimiques volatils qui pourraient être dangereux pour la santé."
                )
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
                    "picture": picturePath+"flacon.png",
                    "alt": "Image d'un flacon",
                    "description": "<p>Pour stocker des solutions ou produis chimiques</p>"
                },

                templateMaterials(
                    "cristallisoir",
                    "Le cristallisoir",
                    "cristallisoir.png",
                    "d'un cristallisoir",
                    "Le cristallisoir est un récipient en verre, généralement peu profond et de forme cylindrique, conçu pour contenir des liquides. Il est utilisé pour refroidir ou chauffer un liquide en y plaçant un bécher.  (Par exemple : transferts d’énergies). On peut réaliser des titrages ou bien observer des phénomènes de précipitation ou de cristallisation. Il permet une formation de cristaux mais aussi d’immerger des objets dans une solution."
                ),

                templateMaterials(
                    "verre-de-montre",
                    "Le verre de montre",
                    "verre-de-montre.png",
                    "d'un verre de montre",
                    "Le verre de montre est une petite plaque de verre circulaire, légèrement concave. Grâce  à sa surface lisse, Il permet de peser une petite quantité de poudres, sels, ou autres solides, permettant un transfert sans pertes de matières, propre et précis . Il est ainsi particulièrement idéal pour la réalisation de mélanges, dissolutions. Il peut aussi être utilisé pour l’observation de petits échantillons au microscope ou à l’œil nu. De plus, il est utilisé pour faire évaporer de petites quantités de liquide ou pour sécher des substances après filtration ou précipitation."

                ),

                templateMaterials(
                    "verre-a-pied",
                    "Le verre à pied",
                    "verre-a-pied.png",
                    "d'un verre à pied",
                    "Le verre à pied est un récipient en forme de gobelet, muni d’ un pied allongé, qui lui assure une stabilité sur une surface plane. Lorsqu’il est gradué, il est idéal pour  mesurer des volumes de liquides. Ce verre est majoritairement utilisé pour contenir ou décanter des liquides. Enfin, il peut être utilisé comme récupérateur de produits usagés, lorsque la manipulation est terminée. "
                ),
            ], 
            "mesure" : [
                "II.2 - Outils de mesure (volumes)",
                {
                    "id": "pipettes",
                    "title": "Les pipettes graduées et jaugées",
                    "picture": picturePath+"pipettes.png",
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

                templateMaterials(
                    "eprouvette-graduee",
                    "L'éprouvette graduée",
                    "eprouvette-graduee.png",
                    "d'une éprouvette graduée",
                    "L’éprouvette graduée est un récipient essentiel en physique-chimie, muni de graduations qui permettent de mesurer avec précision des volumes de liquides. Grâce à cela, elle est indispensable pour réaliser des mélanges, des dilutions, des dosages, ou encore des réactions chimiques nécessitant un contrôle strict des volumes. De plus, sa disponibilité en différentes tailles permet de choisir celle qui est la plus adaptée le cas échéant. Enfin, il est utile de noter que pour lire une éprouvette graduée avec précision, il faut placer ses yeux à la hauteur de la graduation et du bas du ménisque (forme incurvée que forme la surface d’un liquide dans un récipient.)."
                ),

                templateMaterials(
                    "fiole-jaugee",
                    "La fiole jaugée",
                    "fioleJaugee.png",
                    "Image d'une fiole jaugée",
                    "La fiole jaugée est un récipient en verre muni d'un col long et étroit, avec une graduation précise permettant de mesurer un volume exact de liquide. Elle est utilisée pour diluer des solutions, réaliser des mélanges avec précision, et préparer des réactifs dans des volumes spécifiques. Les fioles jaugées sont étalonnées pour garantir l'exactitude des volumes mesurés, ce qui les rend indispensables pour obtenir des concentrations précises de solutions et réaliser des dosages avec rigueur."
                ),
            ], 
            "manipulation": [
                "II.3 - Manipulation",

                templateMaterials(
                    "prisme",
                    "Le prisme",
                    "prisme.png",
                    "d'un prisme",
                    "Les prismes sont des objets transparents, en forme de prisme. En physique, ils sont principalement utilisés pour étudier la réfraction de la lumière. Lorsqu'un faisceau de lumière blanche traverse un prisme, il se décompose en un spectre de couleurs en raison de la dispersion, révélant ainsi les différentes longueurs d'onde qui la composent. Les prismes permettent non seulement d'analyser la lumière blanche, mais aussi d'explorer d'autres phénomènes optiques, tels que la réflexion totale interne et la dispersion de la lumière."
                ),
                templateMaterials(
                    "lentille",
                    "La lentille",
                    "lentille.png",
                    "d'une lentille",
                    "Les lentilles sont des objets transparents en verre ou en plastique, dont la surface courbée permet de converger ou de diverger la lumière. En physique, elles sont principalement utilisées pour étudier la réfraction de la lumière et la formation d'images dans les systèmes optiques. Les lentilles convergentes peuvent former des images réelles ou virtuelles, selon la position de l'objet par rapport à la lentille. Elles sont cruciales pour comprendre les concepts clés de l'optique géométrique, tels que la distance focale, la vergence, et les propriétés des images. Les lentilles sont également essentielles dans diverses applications pratiques, comme la focalisation de la lumière, les instruments optiques (microscopes, lunettes, caméras), et les expériences sur la formation d'images."
                )
            ]
        }
    }, 

    instruments: {
        id: "instruments",
        title: "III - Instruments",
        materials: {
            mesure: [
                "III.1 - Mesures",
                templateMaterials(
                    "ph",
                    "Papier pH, pH-mètre et Stylo-pH",
                    "ph.png",
                    "de papier pH, pH-mètre et Stylo-pH",
                    "Pour mesurer l'acidité ou la basicité des solutions."
                ),
                templateMaterials(
                    "spectrophotometre",
                    "Spectrophotomètre",
                    "spectrophotomètre.png",
                    "d'un spectrophotomètre",
                    "Pour mesurer l'absorption de la lumière par les solutions."
                ),
                templateMaterials(
                    "balance",
                    "Balance",
                    "balance.png",
                    "d'une balance",
                    "Pour mesurer des masses avec une grande précision."
                ),
                templateMaterials(
                    "chronometre",
                    "Chronomètre",
                    "Stopwatch.png",
                    "d'un chronomètre",
                    "Pour mesurer le temps."
                ),
                templateMaterials(
                    "multimetre",
                    "Multimètre",
                    "multimètre.png",
                    "d'un multimètre",
                    "Pour mesurer la tension, le courant et la résistance électriques. Il rassemble : <li>L'Ampèremètre,</li><li>le Voltmètre,</li><li>L'Ohmmètre.</li>"
                ),
                templateMaterials(
                    "barometre",
                    "Baromètre",
                    "baromètre.png",
                    "d'un baromètre",
                    "Pour mesurer la pression atmosphérique."
                ),
                templateMaterials(
                    "dynamometre",
                    "Dynamomètre",
                    "dynamomètre.png",
                    "d'un dynamomètre",
                    "Pour mesurer la force en Newton."
                ),
                templateMaterials(
                    "thermometre",
                    "Thermomètre",
                    "thermometer.png",
                    "d'un thermomètre",
                    "Pour mesurer la température."
                ),
                templateMaterials(
                    "regle-pied-a-coulisse",
                    "Règle et Pied à coulisse",
                    "regle-pied-a-coulisse.png",
                    "d'une règle et d'un pied à coulisse",
                    "Pour mesurer des longueurs et des dimensions avec précision."
                ),
            ],
    
            séparation: [
                "III.2  - Séparation",
                templateMaterials(
                    "colonnes-chromatographie",
                    "Colonnes de chromatographie",
                    "colones-de-chromatographie.png",
                    "du résultat d'une colonne de chromatographie",
                    "Pour séparer les mélanges."
                ),
                templateMaterials(
                    "centrifugeuse",
                    "Centrifugeuse",
                    "centrifugeuse.png",
                    "d'une centrifugeuse",
                    "Pour séparer les composants d’un mélange par densité. Elle peut séparer des constituants solides des constituants liquides et deux constituants liquides non miscibles."
                ),
            ],
    
            "optique-lumière": [
                "III.3 - Optique et Lumière",
                templateMaterials(
                    "laser",
                    "Laser",
                    "laser.png",
                    "d'un laser",
                    "Pour des expériences de lumière et d’optique.",
                ),
                templateMaterials(
                    "prisme",
                    "Le prisme",
                    "prisme.png",
                    "d'un prisme",
                    "Les prismes sont des objets transparents, en forme de prisme. En physique, ils sont principalement utilisés pour étudier la réfraction de la lumière. Lorsqu'un faisceau de lumière blanche traverse un prisme, il se décompose en un spectre de couleurs en raison de la dispersion, révélant ainsi les différentes longueurs d'onde qui la composent. Les prismes permettent non seulement d'analyser la lumière blanche, mais aussi d'explorer d'autres phénomènes optiques, tels que la réflexion totale interne et la dispersion de la lumière."
                ),
                templateMaterials(
                    "lentille",
                    "La lentille",
                    "lentille.png",
                    "d'une lentille",
                    "Les lentilles sont des objets transparents en verre ou en plastique, dont la surface courbée permet de converger ou de diverger la lumière. En physique, elles sont principalement utilisées pour étudier la réfraction de la lumière et la formation d'images dans les systèmes optiques. Les lentilles convergentes peuvent former des images réelles ou virtuelles, selon la position de l'objet par rapport à la lentille. Elles sont cruciales pour comprendre les concepts clés de l'optique géométrique, tels que la distance focale, la vergence, et les propriétés des images. Les lentilles sont également essentielles dans diverses applications pratiques, comme la focalisation de la lumière, les instruments optiques (microscopes, lunettes, caméras), et les expériences sur la formation d'images."
                ),
                templateMaterials(
                    "spectrophotometre",
                    "Spectrophotomètre",
                    "spectrophotomètre.png",
                    "d'un spectrophotomètre",
                    "Pour mesurer l'absorption de la lumière par les solutions."
                ),
            ],
    
            mécanique: [
                "III.4 - Mécanique",
                templateMaterials(
                    "pendule",
                    "Pendule",
                    "pendule.png",
                    "d'un pendule",
                    "Pour des expériences sur le mouvement oscillatoire.",
                ),
                templateMaterials(
                    "regle-pied-a-coulisse",
                    "Règle et Pied à coulisse",
                    "regle-pied-a-coulisse.png",
                    "d'une règle et d'un pied à coulisse",
                    "Pour mesurer des longueurs et des dimensions avec précision."
                ),
                templateMaterials(
                    "levage-poulies",
                    "Système de levage et poulies",
                    "levage-poulies.png",
                    "d'un système de levage avec une poulie",
                    "Pour des expériences sur la mécanique.",
                ),
            ],
    
            électriques: [
                "III.5 - Signaux électriques",
                templateMaterials(
                    "oscilloscope",
                    "Oscilloscope",
                    "oscilloscope.png",
                    "d'un oscilloscope",
                    "Pour visualiser des signaux électriques.",
                ),
                templateMaterials(
                    "generateur-fonctions",
                    "Générateur de fonctions",
                    "générateurs-de-fonctions.png",
                    "d'un générateur de fonctions",
                    "Pour produire des signaux électriques de différentes formes.",
                ),
            ]
        }
    }, 

    accessories: {
        id: "accessories",
        title: "IV - Accessoires",
        materials: {
            "agitation-chauffage": [
                "IV.1 - Agitation et Chauffage",
                templateMaterials(
                    "agitateur-verre",
                    "Agitateur en verre",
                    "agitateur-en-verre.png",
                    "d'un agitateur en verre",
                    "Pour mélanger les solutions manuellement",
                ),
                templateMaterials(
                    "agitateur-magnetique",
                    "Agitateur magnétique",
                    "agitateur-magnetique.png",
                    "d'un agitateur magnétique",
                    "Pour mélanger les solutions sans intervention manuelle.",
                ),
                templateMaterials(
                    "chauffage",
                    "Chauffe-ballons et plaques chauffantes",
                    "chauffe-ballons.png",
                    "d'un chauffe-ballons et d'une plaque chauffante",
                    "Pour chauffer les solutions.",
                ),
            ],

            pipetage: [
                "IV.2 - Pipetage",
                templateMaterials(
                    "pipette-pasteur",
                    "Pipette pasteur",
                    "pipette-pasteur.png",
                    "d'une pipette pasteur",
                    "Les pipettes Pasteur sont couramment utilisées en physique-chimie pour mesurer et transférer de petits volumes de liquides de manière précise. Voici quelques utilisations courantes en physique-chimie : <li>Mesurer des volumes précis de réactifs pour les expériences en laboratoire.</li><li>ransférer des échantillons liquides dans des tubes à essai ou des béchers.</li><li>Réaliser des dilutions en ajoutant des volumes précis de solvant.</li><li>Prélever des échantillons pour des analyses spectroscopiques ou chromatographiques.</li><li>Permettre un mélange homogène de liquides en goutte à goutte.</li><li>Faciliter le dosage de solutions pour des titrages.</li>",
                ),
                templateMaterials(
                    "pipeteur",
                    "Pipeteur (ou pompe à crémaillère)",
                    "pipeteur.png",
                    "d'un pipeteur",
                    `
                    Le pipeteur en physique-chimie est un instrument utilisé pour manipuler des liquides avec précision. Il permet d'aspirer et de distribuer des volumes exacts de liquides, généralement en combinaison avec une pipette. Cela est essentiel dans les expériences où la précision des volumes est cruciale, comme dans les titrations, les préparations de solutions, ou les mesures d'échantillons pour les analyses. En somme, il assure une manipulation précise et reproductible des liquides en laboratoire.
                    <br><br>
                    <ol>
                    <b style="text-decoration: underline;">Méthode :</b>
                    <li><b>Préparation</b> : Fixez la pipette appropriée au pipeteur en veillant à ce qu'elle soit bien ajustée.</li>
                    <li><b>Aspiration</b> : Enfoncez le bouton du pipeteur pour expulser l'air, plongez l'extrémité de la pipette dans le liquide, puis relâchez doucement le bouton pour aspirer le liquide.</li>
                    <li><b>Transfert</b> : Déplacez la pipette au-dessus du récipient de destination.</li>
                    <li><b>Distribution</b> : Enfoncez à nouveau le bouton du pipeteur pour expulser le liquide de la pipette dans le récipient.</li>
                    <li><b>Éjection de la pipette</b> : Si le pipeteur dispose d'un éjecteur, appuyez dessus pour retirer la pipette usagée.</li>
                    </ol> <br>
                    L'opération doit être réalisée lentement et avec soin pour assurer une précision maximale.
                    `
                ),
                templateMaterials(
                    "propinette",
                    "Poire à pipeter ou Propinette",
                    "propinette.png",
                    "d'une propinette",
                    `
                    La poire à pipeter, ou propipette, est un accessoire utilisé en physique-chimie pour manipuler des liquides de manière précise avec une pipette. Elle se fixe à l'extrémité de la pipette et permet d'aspirer et de distribuer des liquides en toute sécurité, sans avoir à les aspirer à la bouche.
                    Elle est utilisée pour aspirer et distribuer des volumes précis de liquides sans contact direct avec la bouche, ce qui est plus hygiénique et sûr, notamment avec des substances dangereuses.
                    <ol> <br>
                    La poire à pipeter est en caoutchouc ou en plastique souple. Elle comporte généralement trois valves :
                    <li><b>Valve A (aspirer)</b> : Permet de vider l'air de la poire.</li>
                    <li><b>Valve S (sucer)</b> : Permet d'aspirer le liquide dans la pipette.</li>
                    <li><b>Valve E (expulser)</b> : Permet de libérer le liquide contenu dans la pipette.</li>
                    </ol> <br>

                    <ol>
                    <b style="text-decoration: underline;">Méthode :</b>
                    
                    <li><b>Préparation </b>: Appuyez sur la valve A pour évacuer l'air de la poire.</li>
                    <li><b>Aspiration </b>: Plongez l'extrémité de la pipette dans le liquide et appuyez sur la valve S pour aspirer le liquide dans la pipette jusqu'au volume désiré.</li>
                    <li><b>Distribution </b>: Déplacez la pipette au-dessus du récipient cible et appuyez sur la valve E pour expulser le liquide.</li>
                
                    <br>
                    Cette méthode est couramment utilisée en laboratoire pour assurer des manipulations précises et sécurisées des liquides.
                    </ol>
                    `,
                ),
            ],

            autres: [
                "IV.3 - Autres accessoires",
                templateMaterials(
                    "spatule",
                    "Spatule",
                    "spatule.png",
                    "d'une spatule",
                    "La spatule en physique-chimie est un petit outil en métal, plastique ou porcelaine utilisé pour manipuler (prélever, transférer ou mélanger) de petites quantités de solides, comme des poudres ou des cristaux. Elle est essentielle pour doser des réactifs en petites quantités, sans risque de contamination.",
                ),
                templateMaterials(
                    "entonnoir",
                    "Entonnoir",
                    "entonnoir.png",
                    "d'un entonnoir",
                    "L'entonnoir en physique-chimie est un instrument en forme de cône, souvent en plastique ou en verre, utilisé pour verser des liquides ou des solides dans des récipients à col étroit, comme des flacons, des béchers ou des éprouvettes, en évitant les déversements. Lorsqu'il est utilisé avec du papier filtre, il permet de séparer les solides des liquides dans un mélange.",
                ),
                templateMaterials(
                    "pissete",
                    "Pissete",
                    "washBottle.png",
                    "d'une pissete",
                    `
                    La pissette en physique-chimie est un flacon en plastique souple équipé d'un long bec fin, utilisé pour rincer, nettoyer ou ajouter de petites quantités de liquide à des expériences.
                    <br>
                    Elle possède diverses fonctionnalités. Par exemple, elle :
                    <li>Sert à rincer la verrerie et les instruments de laboratoire.</li>
                    <li>Permet d'ajouter des petites quantités de liquide à une expérience de manière contrôlée.</li>
                    <li>Est utilisée pour humidifier des réactifs ou des échantillons.</li>
                    `,
                ),
                templateMaterials(
                    "potence-noix-serrage",
                    "Potence (ou support) et noix de serrage",
                    "potence.png",
                    "d'une potence avec une noix de serrage",
                    `
                    La potence (ou support) et les noix de serrage sont des équipements de base en physique-chimie, utilisés pour maintenir et stabiliser divers instruments de laboratoire.
                    <li><b>Potence (ou support)</b> : Il s'agit d'une tige métallique verticale fixée sur une base lourde, assurant stabilité et support pour les appareils ou récipients. Elle peut soutenir des appareils ou des récipients à différentes hauteurs pour des expériences nécessitant précision et sécurité.</li>
                    <li><b>Noix de serrage</b> : Ce sont des dispositifs en métal ou plastique qui se fixent sur la potence et permettent de maintenir d'autres équipements, comme des pinces, des burettes ou des fioles. Elle est ainsi idéal pour fixer solidement les instruments à la potence, ajustant leur position selon les besoins expérimentaux.</li>
                    `, 
                ),
                templateMaterials(
                    "pince-en-bois",
                    "Pince en bois",
                    "pince-en-bois.png",
                    "d'une pince en bois",
                    "La pince en bois en physique-chimie est un outil utilisé pour manipuler en toute sécurité des tubes à essai chauds ou des petits récipients. Elle permet de tenir des tubes à essai lors du chauffage ou après réaction, évitant ainsi les brûlures.",
                ),
                templateMaterials(
                    "support-elevateur",
                    "Support élévateur",
                    "support-elevateur.png",
                    "d'un support élévateur",
                    "Le support élévateur en physique-chimie est un appareil utilisé pour ajuster la hauteur des équipements de laboratoire de manière stable et précise, afin de faciliter les manipulations en laboratoire.",
                ),
                templateMaterials(
                    "refrigerant",
                    "Réfrigérants",
                    "refrigerant.png",
                    "d'un réfrigérant",
                    `
                    Les réfrigérants en physique-chimie sont des dispositifs utilisés pour dissiper la chaleur lors de réactions chimiques ou de distillations. 
                    <br><br>
                    Ce sont des tubes ou des colonnes en verre généralement constitués de deux parties :
                    <li><b>Tube interne </b>: Permet le passage du liquide ou de la vapeur.</li>
                    <li><b>Tube externe </b>: Circule un fluide de refroidissement (souvent de l'eau) autour du tube interne.</li>
                    Il en existe plusieurs types tels que le réfrigérant à serpentin, le réfrigérant à condensation de type Liebig et le réfrigérant à reflux.
                    <br><br>
                    Ils sont essentiels pour contrôler la température des processus chimiques et éviter les pertes de solvants par évaporation. Ils évitent la surchauffe en condensant les vapeurs en liquide et maintiennent des températures spécifiques durant des réactions ou distillations.
                    <br><br>
                    <ol>
                    <b style="text-decoration: underline;">Méthode :</b>
                    <li><b>Installation </b>: Fixez le réfrigérant au système expérimental (souvent à un ballon ou à un dispositif de distillation).</li>
                    <li><b>Circulation </b>: Connectez les entrées et sorties du réfrigérant aux sources d'eau ou au fluide de refroidissement.</li>
                    <li><b>Utilisation </b>: Lorsque le fluide de refroidissement circule, il absorbe la chaleur des vapeurs passant dans le tube interne, condensant les vapeurs en liquide.</li>
                    </ol>
                    `,
                ),
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