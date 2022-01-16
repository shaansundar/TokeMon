async function run(){
    // const [owner, user1, user2, user3]= await hre.ethers.getSigners();
    const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
    const gameContract = await gameContractFactory.deploy(
        ["Charmander", "Bulbasaur", "Squirtle"],
        ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"],
        [50,50,50],
        [30,10,20],
        [10,30,20],
        "Onyx",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/095.png",
        1000000,
        5,
        1
    );
    await gameContract.deployed()
    console.log("From Run.js: GameContract Address:"+gameContract.address);

    
    // let txn;
    // txn = await gameContract.mintCharacterNFT(0);
    // await txn.wait();
    // console.log("Minted NFT #1");

    // txn = await gameContract.mintCharacterNFT(1);
    // await txn.wait();
    // console.log("Minted NFT #2");

    // txn = await gameContract.mintCharacterNFT(2);
    // await txn.wait();
    // console.log("Minted NFT #3");

    // txn = await gameContract.mintCharacterNFT(1);
    // await txn.wait();
    // console.log("Minted NFT #4");

    console.log("Done deploying!");
    
}
run();