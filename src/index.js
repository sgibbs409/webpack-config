const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4
};

const elvenGautlentsRecipe = {
    ...elvenShieldRecipe,
    leather: 1, 
    refinedMoonstone: 2,
};

console.log(elvenShieldRecipe);
console.log(elvenGautlentsRecipe);
