import CardGame from "../../components/CardGame";

function Boardgame(amountCards){
    const $htmlCardGame = CardGame();
    const $htmlBoardgame = $htmlCardGame.repeat(amountCards);
    return $htmlBoardgame;
}
export default Boardgame