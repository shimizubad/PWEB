function resultado(x, y){
    if (x==y){
        return ("Empate")
    }

    if ((x == 1 && y == 2)||(x == 2 && y == 3)||(x == 3 && y == 1)){
        return ("Vitória do Jogador 1");
    }
    
    if ((x == 2 && y ==1)||(x == 3 && y == 2)||(x == 1 && y==3)){
        return ("Vitória do Jogador 2")
    }
}