/* eslint-disable no-else-return */
/* eslint-disable no-debugger */
/* eslint-disable prefer-const */
/* eslint-disable eqeqeq */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import React from 'react';

class AuthHelp {
    static login(usuario, senha) {
        debugger;
        const key = 'registro_' + usuario;
        const existLogin = JSON.parse(localStorage.getItem(key));
        if (existLogin && existLogin.password == senha) {
            let autorizado = usuario;
            localStorage.setItem('fclogin', autorizado);
            return true;
        } else {
            return false;
        }
    }

    static usuarioLogado() {
        if (localStorage.getItem('fclogin')) {
            return true;
        } else {
            return false;
        }
    }

    static esqueceuSenha(email) {
        // TODO: usar o email para enviar a mensagem padrão de recurperação
    }
}

export default AuthHelp;
