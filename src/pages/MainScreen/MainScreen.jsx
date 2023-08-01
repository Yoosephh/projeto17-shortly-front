import React from "react";
import "./style.css";
import logo from "../../assets/logo.png"

export default function MainScreen(){
  return (
    <div className="tela-inicial-logada">
      <div className="div">
        <div className="logo">
          <h1 className="text-wrapper">Shortly</h1>
          <img className="twemoji-shorts" alt="Twemoji shorts" src={logo} />
        </div>
        <div className="INPUT">
          <div className="overlap-group">
            <p className="p">Links que cabem no bolso</p>
          </div>
        </div>
        <div className="INPUT-2">
          <div className="overlap">
            <div className="frame">
              <div className="text-wrapper-2">https://www.driven.com.br</div>
              <div className="text-wrapper-2">e4231A</div>
              <div className="text-wrapper-2">Quantidade de visitantes: 271</div>
            </div>
          </div>
          <div className="vector-wrapper">
            <ion-icon name="trash"></ion-icon>
          </div>
        </div>
        <div className="BOTAO">
          <div className="div-wrapper">
            <div className="text-wrapper-4">Encurtar link</div>
          </div>
        </div>
        <div className="text-wrapper-5">Seja bem-vindo(a), Pessoa!</div>
        <div className="text-wrapper-6">Sair</div>
        <div className="text-wrapper-7">Home</div>
        <div className="text-wrapper-8">Ranking</div>
      </div>
    </div>
  );
}