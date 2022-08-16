import axios from "axios";
const BASE_URL = "https://mock-api.driven.com.br/api/v4/driven-plus"



function createHeaders() {
    const auth = JSON.parse(localStorage.getItem('drivenplus'));
    const config = {
        headers: {
            Authorization: `Bearer ${auth.token}`
        }
    };

    return config;
}


function postCadastro(body) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
    return promise

}

function postLogin(body) {
    const promise = axios.post(`${BASE_URL}/auth/login`, body);
    return promise
}


function getPlanos() {
    const promise = axios.get(`${BASE_URL}/subscriptions/memberships`, createHeaders());
    return promise
}

function getPlan(idPlan) {

    const promise = axios.get(`${BASE_URL}/subscriptions/memberships/${idPlan}`, createHeaders());
    return promise
}


function postSignPlan(body) {
    const promise = axios.post(`${BASE_URL}//subscriptions`, body, createHeaders());
    return promise
}

function deletePlan (){
    const promise = axios.delete (`${BASE_URL}//subscriptions`, createHeaders())
    return promise
}

export { postCadastro, postLogin, createHeaders, getPlanos, getPlan, postSignPlan, deletePlan }