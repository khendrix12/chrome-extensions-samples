// class Cocktail{
//     constructor(name, liquor, sweet, classy, link){
//         this.name = name;
//         this.liquor = liquor;
//         this.sweet = sweet;
//         this.classy = classy;
//         this.link = link;
//     }
// }
//global array of cocktails
//uninitialized array that we'll use to reassign 

//
// let testH = document.createElement('h1');
// testH.innerHTML = 'Hey there';
// document.body.appendChild(testH);

//Step 0: Popup and alert user at a given time
//Step 1: Ask them if they are ready for a drink
    //Text, Img
    //Yes and No Button

const cocktails = [
    {name: 'Tom Collins',liquor:"Gin", sweet:true, classy:true, image:'https://www.liquor.com/thmb/tgWPQqsyM7-TFAA7vw_0h7aZszY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__04__03080950__Tom-Collins-720x720-recipe-e87bf7954cdb4438b5e8d21f568cdd6f.jpg', link:'https://www.liquor.com/recipes/tom-collins-2/'},
    {name: 'Irish Trash Can',liquor:"Gin", sweet:true, classy:false, image:'https://cookingwithjanica.com/wp-content/uploads/2019/03/irish_trash_can-1.jpg', link:'https://cookingwithjanica.com/irish-trash-can/'},
    {name: 'Trashtini',liquor:"Gin", sweet:false, classy:false, image:'https://assets-prd.punchdrink.com/wp-content/uploads/2015/12/13104026/Article-Trashtini-Dirty-Martini-Cocktail-Recipe.jpg', link:'https://punchdrink.com/recipes/trash-tini/'},
    {name: 'Dirty Martini',liquor:"Gin", sweet:false, classy:true, image:'https://www.liquor.com/thmb/eUleEv2LoOlMLJjgNctNGnIKFqM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2011__04__15150034__dirty-martini-720x720-recipe-7127449167d548c981c6103fd60f49b0.jpg', link:'https://www.liquor.com/recipes/dirty-martini/'},

    {name: 'Bourbon Old Fashioned',liquor:"Whiskey", sweet:true, classy:true, image:'https://www.liquor.com/thmb/NIIDroy7AQXG7DIMaCv7WQexmPw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__08113350__bourbon-old-fashioned-720x720-recipe-ade6f7780c304999be3577e565c9bcdd.jpg', link:'https://www.liquor.com/recipes/bourbon-old-fashioned/'},
    {name: 'Campfire Fireball Cocktail',liquor:"Whiskey", sweet:true, classy:false, image:'https://thesoccermomblog.com/wp-content/uploads/2022/05/Campfire-Fireball-Cocktail-1.jpg', link:'https://thesoccermomblog.com/campfire-fireball-cocktail/'},
    {name: 'Risky Whiskey',liquor:"Whiskey", sweet:false, classy:false, image:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/3/27/0/SH1308-1_Risky-Whiskey_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382742888830.jpeg', link:'https://www.foodnetwork.com/recipes/sandra-lee/risky-whiskey-recipe-1946269'},
    {name: 'Sazerac',liquor:"Whiskey", sweet:false, classy:true, image:'https://www.liquor.com/thmb/p6MFrjj--xzEjTp57F-FIsjEJuo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__10145323__sazerac-720x720-recipe-2c78066a77ab453481aceb83c219d78f.jpg', link:'https://www.liquor.com/recipes/sazerac/'},

    {name: 'Siesta',liquor:"Tequila", sweet:true, classy:true, image:'https://www.acouplecooks.com/wp-content/uploads/2021/05/Siesta-Cocktail-001.jpg', link:'https://www.acouplecooks.com/siesta-cocktail/'},
    {name: 'Tropical Fishbowl Margarita',liquor:"Tequila", sweet:true, classy:false, image:'https://tipsybartender.com/wp-content/uploads/2018/01/bulldog-fishbowl.jpg', link:'https://tipsybartender.com/recipe/tropical-fishbowl-margarita/'},
    {name: 'Squirtarita',liquor:"Tequila", sweet:false, classy:false, image:'https://cdn.vox-cdn.com/thumbor/gQjLN6IHjJKBSc-pvIAqbiZP-iE=/0x0:6000x4000/1820x1213/filters:focal(2520x1520:3480x2480):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66680028/shutterstock_614251025.0.jpg', link:'https://www.eater.com/2020/4/20/21228487/best-quarantine-at-home-cocktail-squirtaritahttps://www.eater.com/2020/4/20/21228487/best-quarantine-at-home-cocktail-squirtarita'},
    {name: 'Tequila Sour',liquor:"Tequila", sweet:false, classy:true, image:'https://www.acouplecooks.com/wp-content/uploads/2020/04/Tequila-Sour-012.jpg', link:'https://www.acouplecooks.com/tequila-sour/'},    
];
let cocktailChoice;

//create a div
let stepOneDiv = document.createElement('div');
let stepOneP = document.createElement('p');
stepOneP.innerHTML = "It's five o'clock! Whatcha sippin' on?"

let stepOneImg = document.createElement('img');
stepOneImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnm904tg7RLSmMMYJqckCOSLTAWS4cj9DcYQ&usqp=CAU';


let stepOneButton1 = document.createElement('button');
stepOneButton1.innerHTML = 'Help me choose!'

let stepOneButton2 = document.createElement('button');
stepOneButton2.innerHTML = 'Not in the mood...'

stepOneDiv.append(stepOneP, stepOneImg, stepOneButton1, stepOneButton2);
document.body.appendChild(stepOneDiv);

let stepTwoDiv = document.createElement('div');
let stepTwoP = document.createElement('p');
stepTwoP.innerHTML = "What liquor do you want to use?"

let stepTwoImg = document.createElement('img');
stepTwoImg.src = 'https://media.istockphoto.com/id/459018635/photo/liquor-bottles-on-a-white-background.jpg?s=1024x1024&w=is&k=20&c=ZdyuUTJLUn72zv8Su9K2mO2CSv6gxGEj85RdIdh6l5Y=';

let stepTwoButton1 = document.createElement('button');
stepTwoButton1.innerHTML = 'Whiskey'

let stepTwoButton2 = document.createElement('button');
stepTwoButton2.innerHTML = 'Gin'

let stepTwoButton3 = document.createElement('button');
stepTwoButton3.innerHTML = 'Tequila'

stepTwoDiv.append(stepTwoP, stepTwoImg, stepTwoButton1, stepTwoButton2, stepTwoButton3);
document.body.appendChild(stepTwoDiv);
stepTwoDiv.style.display = 'none';

let goodbyeDiv = document.createElement('div');
    let goodbyeP = document.createElement('p');
    goodbyeP.innerHTML = 'Goodnight, then!'
    goodbyeDiv.append(goodbyeP);
    document.body.appendChild(goodbyeDiv);
    goodbyeDiv.style.display = 'none';

stepOneButton1.addEventListener('click', () => {
    stepOneDiv.style.display = 'none';
    stepTwoDiv.style.display = 'block';
    
})

stepOneButton2.addEventListener('click', () => {
    stepOneDiv.style.display = 'none';
    goodbyeDiv.style.display = 'block';
})

// Sweet/Bitter Buttons
let sweetButton = document.createElement('button');
sweetButton.innerHTML = 'Sweet'

let bitterButton = document.createElement('button');
bitterButton.innerHTML = 'Bitter'

let sweetBitterDiv = document.createElement('div');
sweetBitterDiv.append(bitterButton, sweetButton);

// Whiskey
let whiskeyDiv = document.createElement('div');
let whiskeyP = document.createElement('p');
whiskeyP.innerHTML = "Do you want your drink sweet or bitter?"

let whiskeyImg = document.createElement('img');
whiskeyImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ1LaNFWsu3W6r-sapMficOhEe_bmKrQlbBQ&usqp=CAU';

whiskeyDiv.append(whiskeyP, whiskeyImg);
document.body.appendChild(whiskeyDiv);
whiskeyDiv.style.display = 'none';

//Whiskey
stepTwoButton1.addEventListener('click', () => {
    whiskeyDiv.appendChild(sweetBitterDiv); /////
    console.log('whiskey');
    stepTwoDiv.style.display = 'none';
    whiskeyDiv.style.display = 'block';

    //filter array to only include whiskey
    cocktailChoice = cocktails.filter((el) => el.liquor === 'Whiskey');
    console.log(cocktailChoice);
})

// Gin
let ginDiv = document.createElement('div');
let ginP = document.createElement('p');
ginP.innerHTML = "Do you want your drink sweet or bitter?"

let ginImg = document.createElement('img');
ginImg.src = 'https://i.insider.com/636d3762f5877200181c5329?width=1200&format=jpeg';

ginDiv.append(ginP, ginImg);
document.body.appendChild(ginDiv);
ginDiv.style.display = 'none';

//Gin
stepTwoButton2.addEventListener('click', () => {
    ginDiv.appendChild(sweetBitterDiv);
    stepTwoDiv.style.display = 'none';
    ginDiv.style.display = 'block';

    //filter to only include gin
    cocktailChoice = cocktails.filter((el) => el.liquor === 'Gin');
    console.log(cocktailChoice);
})

// Tequila 
let teqDiv = document.createElement('div');
let teqP = document.createElement('p');
teqP.innerHTML = "Do you want your drink sweet or bitter?"

let teqImg = document.createElement('img');
teqImg.src = 'https://cdn.thewirecutter.com/wp-content/media/2022/12/tequila-2048px-6136-3x2-1.jpg?auto=webp&quality=60&crop=1.91:1&width=1200';

teqDiv.append(teqP, teqImg);
document.body.appendChild(teqDiv);
teqDiv.style.display = 'none';

//Tequila
stepTwoButton3.addEventListener('click', () => {
    teqDiv.appendChild(sweetBitterDiv);
    stepTwoDiv.style.display = 'none';
    teqDiv.style.display = 'block';

    //filter to only include tequila
    cocktailChoice = cocktails.filter((el) => el.liquor === 'Tequila');
    console.log(cocktailChoice);
})

// Classy/Trashy Buttons
let classyButton = document.createElement('button');
classyButton.innerHTML = 'Classy'

let trashyButton = document.createElement('button');
trashyButton.innerHTML = 'Trashy'

let classyTrashyDiv = document.createElement('div');
classyTrashyDiv.append(classyButton, trashyButton);

// Sweet
let sweetDiv = document.createElement('div');
let sweetP = document.createElement('p');
sweetP.innerHTML = "Do you want your drink classy or trashy?"

let sweetImg = document.createElement('img');
sweetImg.src = 'https://cdn.thewirecutter.com/wp-content/media/2022/12/tequila-2048px-6136-3x2-1.jpg?auto=webp&quality=60&crop=1.91:1&width=1200';

sweetDiv.append(sweetP, sweetImg);
document.body.appendChild(sweetDiv);
sweetDiv.style.display = 'none';

sweetButton.addEventListener('click', () => {
    sweetDiv.appendChild(classyTrashyDiv);
    if (teqDiv.style.display === 'block') {
        teqDiv.style.display = 'none' 
    } else if (ginDiv.style.display === 'block') {
        ginDiv.style.display = 'none' 
    } else if (whiskeyDiv.style.display === 'block') {
        whiskeyDiv.style.display = 'none' 
    }
    sweetDiv.style.display = 'block';

    //filter to only include sweet drinks
    cocktailChoice = cocktailChoice.filter((el) => el.sweet === true);
    console.log(cocktailChoice);
})

// Bitter
let bitterDiv = document.createElement('div');
let bitterP = document.createElement('p');
bitterP.innerHTML = "Do you want your drink classy or trashy?"

let bitterImg = document.createElement('img');
bitterImg.src = 'https://cdn.thewirecutter.com/wp-content/media/2022/12/tequila-2048px-6136-3x2-1.jpg?auto=webp&quality=60&crop=1.91:1&width=1200';

bitterDiv.append(bitterP, bitterImg);
document.body.appendChild(bitterDiv);
bitterDiv.style.display = 'none';

bitterButton.addEventListener('click', () => {
    bitterDiv.appendChild(classyTrashyDiv);
    if (teqDiv.style.display === 'block') {
        teqDiv.style.display = 'none' 
    } else if (ginDiv.style.display === 'block') {
        ginDiv.style.display = 'none' 
    } else if (whiskeyDiv.style.display === 'block') {
        whiskeyDiv.style.display = 'none' 
    }
    bitterDiv.style.display = 'block';

    //filter to only include bitter drinks
    cocktailChoice = cocktailChoice.filter((el) => el.sweet === false);
    console.log(cocktailChoice);
})

classyButton.addEventListener('click', () => {
    if (sweetDiv.style.display === 'block') {
        sweetDiv.style.display = 'none'
    } else if (bitterDiv.style.display === 'block') {
        bitterDiv.style.display = 'none'
    }
    cocktailChoice = cocktailChoice.filter((el) => el.classy);
    console.log(cocktailChoice);
    finalScreen(cocktailChoice[0]);
})

trashyButton.addEventListener('click', () => {
    if (sweetDiv.style.display === 'block') {
        sweetDiv.style.display = 'none'
    } else if (bitterDiv.style.display === 'block') {
        bitterDiv.style.display = 'none'
    }

    cocktailChoice = cocktailChoice.filter((el) => !el.classy);
    console.log(cocktailChoice);
    finalScreen(cocktailChoice[0]);
})

function finalScreen(cocktail){
    const finalScreen = document.createElement('div');

    const cocktailImg = document.createElement('img');
    cocktailImg.src = cocktail.image;
    
    const recipeLink = document.createElement('a');
    recipeLink.href = cocktail.link;
    recipeLink.innerHTML = 'Your cocktail awaits...';
    recipeLink.target = '_blank';
    // chrome.tabs.create({url: $(this).attr('href')});
    

    const finalText = document.createElement('p');
    finalText.innerHTML = `You got ${cocktail.name}!`;
    // finalText.onclick = () => {
    //     chrome.tabs.create({url: $(this).attr('href')});
    // }
    finalScreen.append(finalText, cocktailImg, recipeLink);
    document.body.appendChild(finalScreen);
    
    //hide classy/trashy screen

}
// cocktailChoice = cocktailChoice.filter((el) => el.sweet);
// cocktailChoice = cocktailChoice.filter((el) => !el.sweet);
// cocktailChoice = cocktailChoice.filter((el) => el.classy);
// cocktailChoice = cocktailChoice.filter((el) => !el.classy);


//create a paragraph
//create an img
//create yes and no buttons
//add everything to the div
//append div to body

//Step 2: What liquor?
    //Buttons and Images for liquor options
//Step 3: Sweet or bitter?
    //Buttons and Images...
//Step 4: Classy or trashy?
    //Buttons and Images...
//Step 5: Suggest a drink and provide a link to a recipe
    //Link, image, sound-effect


//Liquor types
    //Whiskey, Gin, Tequila

//Cocktail object
    //liquor-string
    //Sweet/Bitter-boolean
    //Classy/Trashy-boolean
    //url to recipe
    //url to image


console.log("This is a popup!");


/*
Tequila
Sweet+Trashy: 
    https://tipsybartender.com/recipe/tropical-fishbowl-margarita/
    https://tipsybartender.com/wp-content/uploads/2018/01/bulldog-fishbowl.jpg
Sweet+Classy:
    https://www.acouplecooks.com/siesta-cocktail/
    https://www.acouplecooks.com/wp-content/uploads/2021/05/Siesta-Cocktail-001.jpg
Bitter+Trashy
    https://cdn.vox-cdn.com/thumbor/gQjLN6IHjJKBSc-pvIAqbiZP-iE=/0x0:6000x4000/1820x1213/filters:focal(2520x1520:3480x2480):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66680028/shutterstock_614251025.0.jpg
    https://www.eater.com/2020/4/20/21228487/best-quarantine-at-home-cocktail-squirtaritahttps://www.eater.com/2020/4/20/21228487/best-quarantine-at-home-cocktail-squirtarita
    "Quarantine's Perfect Cocktail"
    
Bitter+Classy
    https://www.acouplecooks.com/wp-content/uploads/2020/04/Tequila-Sour-012.jpg
    https://www.acouplecooks.com/tequila-sour/


Whiskey 
    sweet trashy 
    https://thesoccermomblog.com/campfire-fireball-cocktail/

    sweet classy 
     https://www.liquor.com/recipes/bourbon-old-fashioned/

    bitter trashy 
     https://www.foodnetwork.com/recipes/sandra-lee/risky-whiskey-recipe-1946269

    bitter classy 
     https://www.liquor.com/recipes/sazerac/

Gin 
    sweet trashy
    https://cookingwithjanica.com/irish-trash-can/

    sweet classy
    https://www.liquor.com/recipes/tom-collins-2/
     
    bitter trashy 
    https://punchdrink.com/recipes/trash-tini/

    bitter classy 
    https://www.liquor.com/recipes/dirty-martini/

*/





