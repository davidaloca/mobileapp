export function get_Data(test = false) {
    return test ? Test_DATA : real_Data
}


const Test_DATA = {
    DRINK: [
        { name: "placeholder Name", price: 1, type: "HotDrink", img: "img path relative from index.html", description: "description text" },
        { name: "Caffè Crema", price: 2.90, type: "HotDrink", img: "./img/produkte/coffee.png", description: "Ein harmonischer Kaffee mit feiner Crema, der das perfekte Gleichgewicht zwischen Stärke und Milde bietet." },
        { name: "Cappuccino", price: 4.00, type: "HotDrink", img: "./img/produkte/cappuccino.png", description: "Die perfekte Balance von cremigem Milchschaum und kräftigem Espresso - ein aromatisches Meisterwerk, das den Tag versüßt." },
        { name: "Latte Machiato", price: 5.00, type: "HotDrink", img: "./img/produkte/latte.png", description: "Ein Kunstwerk in der Tasse - perfekt geschichtete Schichten aus Espresso, heißer Milch und feinem Milchschaum, das Auge und Gaumen gleichermaßen verwöhnt" },
        { name: "Flat White", price: 2.90, type: "HotDrink", img: "./img/produkte/coffee.png", description: " placeholder" },
        { name: "Espresso Lungo", price: 4.00, type: "HotDrink", img: "./img/produkte/espresso.png", description: "Ein intensiver Genuss, der mit seinem vollen Aroma und der perfekten Crema jeden Kaffeeliebhaber verführt." },
        { name: "Heiße Schokolade", price: 2.90, type: "HotDrink", img: "./img/produkte/chocolate.png", description: "Eine wärmende Umarmung in Tassenform - cremig, schokoladig und einfach unwiderstehlich." },
        { name: "Chai Lattè", price: 4.00, type: "HotDrink", img: "./img/produkte/placeholder.png", description: " placeholder" },
        { name: "Tee", price: 2.50, type: "HotDrink", img: "./img/produkte/tea.png", description: "(Früchte, Pfefferminze, Kamille, Grüner Tee, Earl Grey)\nEine aromatische Reise durch die Sinne - von erfrischender Pfefferminze bis hin zu beruhigender Kamille, von belebendem Grüntee bis zu dem subtilen Aroma von Earl Grey. Gönnen Sie sich eine Tasse pure Entspannung und Genuss." },

        { name: "Iced Coffee", price: 4.9, type: "SoftDrink", img: "./img/produkte/icedcoffee.png", description: "Erfrischend, aromatisch, die perfekte Kombination aus kühlem Genuss und belebendem Koffein." },
        { name: "Iced Tea Waldfrüchte", price: 3.5, type: "SoftDrink", img: "./img/produkte/iceberries.png", description: "Eine erfrischende Symphonie aus wilden Früchten, vereint mit der kühlen Süße von Eistee - ein belebendes Getränk für heiße Tage." },
        { name: "Iced Tea Zitrone & Maracuja", price: 3.5, type: "SoftDrink", img: "./img/produkte/icelemon.png", description: "Eine erfrischende Fusion von prickelnder Zitrone und exotischer Maracuja, perfekt gekühlt für ein belebendes Geschmackserlebnis" },
        { name: "Iced Tea Pfirsich", price: 3.5, type: "SoftDrink", img: "./img/produkte/icepeach.png", description: "Ein erfrischendes Getränk, das den Geschmack sonnenverwöhnter Pfirsiche einfängt und mit einer kühlen Brise belebt." },
        { name: "Wasser m. Sprudel", price: 2.9, type: "SoftDrink", img: "./img/produkte/water.png", description: "Eine erfrischende Explosion auf der Zunge, die den Durst löscht und belebt." },
        { name: "Wasser Still", price: 2.9, type: "SoftDrink", img: "./img/produkte/water.png", description: "Frisch, erfrischend, klar - die perfekte Quelle für pure Erfrischung und revitalisierende Momente." }

    ],
    SUGAR: [
        { name: "Sugar", price: 0.1, img: "./img/produkte/sugar.jpg", description: "Feine Kristalle, die sich sanft im heißen Getränk auflösen und eine perfekte Balance aus Süße und Genuss bieten." },
        { name: "Brown Sugar", price: 0.2, img: "./img/produkte/brownsugar.jpg", description: "Eine köstliche Ergänzung, die mit ihrem reichen, karamellartigen Geschmack jedem heißen Getränk eine warme Süße verleiht." },
        { name: "Honig", price: 0.5, img: "./img/produkte/honey.png", description: "Natürlich süß und voller Aroma, verleiht Honig jedem heißen Getränk eine wohltuende Süße und einen Hauch von Natur." }
    ],
    MILK: [
        { name: "Milch", price: 0.1, img: "./img/produkte/milk/milk.png", description: "Cremig und vielseitig - perfekt, um Kaffee, Tee oder Kakao eine sanfte, beruhigende Note zu verleihen." },
        { name: "Hafermilch", price: 0.3, img: "./img/produkte/milk/hafermilk.png", description: "Eine cremige, pflanzliche Alternative zu traditioneller Milch, die einen leicht süßen Geschmack und eine angenehme Textur bietet, perfekt für die Zubereitung von heißen Getränken wie Kaffee oder Kakao." },
        { name: "Sojamilch", price: 0.3, img: "./img/produkte/milk/sojamilk.png", description: "Die perfekte Alternative für milchfreien Genuss - cremig, leicht süßlich und ideal für die Zubereitung von heißen Getränken wie Kaffee oder Tee." },
        { name: "Mandelmilch", price: 0.3, img: "./img/produkte/milk/mandelmilk.png", description: "Eine köstlich cremige Alternative zur herkömmlichen Milch, die mit einem zarten Mandelaroma jedem heißen Getränk eine samtige Note verleiht." }
    ],
    TOPPING: [
        { name: "placeholder Name", price: 0, img: "./img/produkte/placeholder.png", description: "description text" }
    ],
    SNACK: [
        { name: "placeholder Name", price: 1, img: "./img/produkte/placeholder.png", description: "description text" },
        { name: "Focaccia Antipasti & Trüffelmayo (vegan)", price: 5.0, img: "./img/produkte/placeholder.png", description: "description text" },
        { name: "Focaccia Hähnchen, Mozarella & Pesto", price: 6.0, img: "./img/produkte/placeholder.png", description: "description text" },
        { name: "Baguette: Chicken Club Style", price: 1, img: "./img/produkte/placeholder.png", description: "description text" },
        { name: "Baguette: Avocado Greek Style", price: 1, img: "./img/produkte/placeholder.png", description: "description text" },
        { name: "Buttercroissant", price: 3.00, img: "./img/produkte/placeholder.png", description: "Knusprig außen, weich innen - ein salziges Vergnügen, das Tradition und Geschmack vereint." },
        { name: "Brezel", price: 2.20, img: "./img/produkte/placeholder.png", description: "Knusprig außen, weich innen - ein salziges Vergnügen, das Tradition und Geschmack vereint." },
        { name: "Brezel Frischkäse Schnittlauch", price: 3.50, img: "./img/produkte/placeholder.png", description: "Knusprig außen, weich innen - ein salziges Vergnügen, das Tradition und Geschmack vereint." },

        { name: "White Muffin", price: 2.5, img: "./img/produkte/placeholder.png", description: "Ein fluffiges Vergnügen, das in jedem Bissen einen Hauch von Süße und Zartheit offenbart." },
        { name: "Choco Muffin", price: 2.5, img: "./img/produkte/placeholder.png", description: "Ein saftiger Genuss, der mit jedem Bissen den verlockenden Geschmack von Schokolade enthüllt." },
        { name: "Franzbrötchen", price: 1.9, img: "./img/produkte/placeholder.png", description: "Hamburgs zimtige Versuchung - knusprig außen, zart und buttrig innen." },
        { name: "Schokocroissant", price: 3.2, img: "./img/produkte/placeholder.png", description: "Ein fluffiges Croissant, umhüllt von zarter Schokolade - ein himmlischer Genuss für jede Gelegenheit." },
        { name: "Double Chocolate Cookie", price: 2.0, img: "./img/produkte/placeholder.png", description: "Eine köstliche Verschmelzung aus zarter Schokolade und knackigen Schokostücken - ein Schokoladenliebhabertraum in jedem Bissen." },
        { name: "Hafer Chocolate Cookie", price: 2.0, img: "./img/produkte/placeholder.png", description: "Knusprig, schokoladig, voller Haferflocken - der perfekte Biss für den ultimativen Genussmoment." },
        { name: "Zitronenkuchen", price: 2.0, img: "./img/produkte/placeholder.png", description: "Frisch, saftig, mit einem Hauch von Zitrone - ein Stück Sonnenschein für den Gaumen." },
        { name: "Schokokuchen", price: 3.2, img: "./img/produkte/placeholder.png", description: "Ein Stück schokoladiges Glück - reichhaltig, verführerisch und unwiderstehlich schokoladig." },
        { name: "Schwedischer Blaubeerkuchen", price: 4.0, img: "./img/produkte/placeholder.png", description: "Ein Stück Schweden im Gaumen - saftig, fruchtig und voller aromatischer Blaubeeren, das jeden Bissen zu einem Geschmacksabenteuer macht." },
        { name: "Lütticher Waffel", price: 2, img: "./img/produkte/placeholder.png", description: "Knusprig außen, zart süß innen - ein unwiderstehliches belgisches Meisterwerk, das jeden Bissen zum Genuss macht." },
    ],
    ADDRESS: [
        { plz: 20097, city: "Hamburg", street: "Süderstraße", house_number: 24, }
    ]
}