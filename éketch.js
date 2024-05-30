ficaColisaoRaquete(x, y) {
  colidiu = collideRectCircle(x,y,wRaquete,hRaquete,xBolinha,yBolinha,raio);
  if (colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function mostrarPlacar() {
  textAlign(CENTER);
  textSize(16);
  fill(255);
  rect(150,10,40,20)
  fill(color(77,77,77));
  text(meusPontos, 170, 26);
  fill(255);
  rect(450,10,40,20)
  fill(color(77,77,77));
  text(pontosOponente, 470, 26);
}

function pontuação() {
  if (xBolinha > 590) {
    meusPontos += 1;
    ponto.play();
  }

  if (xBolinha < 10 ) {
    pontosOponente += 1;
    ponto.play();
  }
}
