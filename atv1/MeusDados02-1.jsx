import React from "react"
const MyProps = (props) => {
    return (
        <div>
            <h1>Nome: {props.nome}</h1>
            <h1>Curso: {props.curso}</h1>
            <h1>Instituiçao: {props.local}</h1>
        </div>
    )
}

const MyPropsV1 = (props) => {
    const {nome,curso, local} = props
    return (
        <div>
            <h1>Nome: {nome}</h1>
            <h1>Curso: {curso}</h1>
            <h1>Instituição: {local}</h1>
        </div>
    )
}


const MyPropsV2 = (props) => {
    let nome = props.nome
    let curso = props.curso
    let local = props.local
    return (
        <div>
            <h1>Nome: {nome}</h1>
            <h1>Curso: {curso}</h1>
            <h1>Instituição: {local}</h1>
        </div>
    )
}

const MyPropsV3 = ({nome,curso,local}) => {
    return (
        <div>
            <h1>Nome: {nome}</h1>
            <h1>Curso:{curso}</h1>
            <h1>Instituição:{local}</h1>
        </div>
    )
}
export default MyProps