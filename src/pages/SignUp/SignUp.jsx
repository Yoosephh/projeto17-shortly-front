export default function SignUp() {

  return(
    <div className="TelaDeCadastro" style={{width: 1440, height: 1024, position: 'relative', background: 'white'}}>
  <div className="Logo" style={{left: 563, top: 95, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
    <div className="Shortly" style={{color: 'black', fontSize: 64, fontFamily: 'Lexend Deca', fontWeight: '200', wordWrap: 'break-word'}}>Shortly</div>
    <div className="TwemojiShorts" style={{width: 102, height: 102, position: 'relative'}}>
      <div className="Vector" style={{width: 102, height: 96.33, left: 0, top: 2.83, position: 'absolute', background: '#78B159'}}></div>
      <div className="Group" style={{width: 82.64, height: 65.42, left: 9.68, top: 11.33, position: 'absolute'}}>
        <div className="Vector" style={{width: 78.15, height: 28.09, left: 0, top: 0, position: 'absolute', background: '#5D9040'}}></div>
        <div className="Vector" style={{width: 44.15, height: 59.76, left: 38.49, top: 5.67, position: 'absolute', background: '#5D9040'}}></div>
        <div className="Vector" style={{width: 14.17, height: 51, left: 41.32, top: 2.83, position: 'absolute', background: '#5D9040'}}></div>
      </div>
    </div>
  </div>
  <div className="Input" style={{width: 769, height: 60, left: 346, top: 325, position: 'absolute'}}>
    <div className="Input" style={{width: 769, height: 60, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 4px 24px rgba(120, 177, 89, 0.12)', borderRadius: 12, border: '0.50px rgba(120, 177, 89, 0.25) solid'}} />
    <div className="Nome" style={{width: 182.16, left: 21.73, top: 21, position: 'absolute', color: '#9C9C9C', fontSize: 14, fontFamily: 'Lexend Deca', fontWeight: '400', wordWrap: 'break-word'}}>Nome</div>
  </div>
  <div className="Input" style={{width: 769, height: 60, left: 346, top: 410, position: 'absolute'}}>
    <div className="Input" style={{width: 769, height: 60, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 4px 24px rgba(120, 177, 89, 0.12)', borderRadius: 12, border: '0.50px rgba(120, 177, 89, 0.25) solid'}} />
    <div className="EMail" style={{width: 182.16, left: 21.73, top: 21, position: 'absolute', color: '#9C9C9C', fontSize: 14, fontFamily: 'Lexend Deca', fontWeight: '400', wordWrap: 'break-word'}}>E-mail</div>
  </div>
  <div className="Input" style={{width: 769, height: 60, left: 346, top: 410, position: 'absolute'}}>
    <div className="Input" style={{width: 769, height: 60, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 4px 24px rgba(120, 177, 89, 0.12)', borderRadius: 12, border: '0.50px rgba(120, 177, 89, 0.25) solid'}} />
    <div className="EMail" style={{width: 182.16, left: 21.73, top: 21, position: 'absolute', color: '#9C9C9C', fontSize: 14, fontFamily: 'Lexend Deca', fontWeight: '400', wordWrap: 'break-word'}}>E-mail</div>
  </div>
  <div className="Input" style={{width: 769, height: 60, left: 346, top: 495, position: 'absolute'}}>
    <div className="Input" style={{width: 769, height: 60, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 4px 24px rgba(120, 177, 89, 0.12)', borderRadius: 12, border: '0.50px rgba(120, 177, 89, 0.25) solid'}} />
    <div className="Senha" style={{width: 182.16, left: 21.73, top: 21, position: 'absolute', color: '#9C9C9C', fontSize: 14, fontFamily: 'Lexend Deca', fontWeight: '400', wordWrap: 'break-word'}}>Senha</div>
  </div>
  <div className="Input" style={{width: 769, height: 60, left: 346, top: 580, position: 'absolute'}}>
    <div className="Input" style={{width: 769, height: 60, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 4px 24px rgba(120, 177, 89, 0.12)', borderRadius: 12, border: '0.50px rgba(120, 177, 89, 0.25) solid'}} />
    <div className="ConfirmarSenha" style={{width: 182.16, left: 10.73, top: 21, position: 'absolute', color: '#9C9C9C', fontSize: 14, fontFamily: 'Lexend Deca', fontWeight: '400', wordWrap: 'break-word'}}>Confirmar senha</div>
  </div>
  <div className="Botao" style={{width: 182, height: 60, left: 640, top: 701, position: 'absolute'}}>
    <div className="Botao" style={{width: 182, height: 60, left: 0, top: 0, position: 'absolute', background: '#5D9040', borderRadius: 12}} />
    <div className="CriarConta" style={{left: 44, top: 21, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Lexend Deca', fontWeight: '700', wordWrap: 'break-word'}}>Criar Conta</div>
  </div>
  <div className="Entrar" style={{left: 1115, top: 60, position: 'absolute', color: '#9C9C9C', fontSize: 14, fontFamily: 'Lexend Deca', fontWeight: '400', wordWrap: 'break-word'}}>Entrar</div>
  <div className="CadastrarSe" style={{left: 1180, top: 60, position: 'absolute', color: '#5D9040', fontSize: 14, fontFamily: 'Lexend Deca', fontWeight: '400', wordWrap: 'break-word'}}>Cadastrar-se</div>
</div>
  )
}