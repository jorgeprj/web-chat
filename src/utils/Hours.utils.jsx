export const getHours = (timestamp) => {
    const messageDate = new Date(timestamp);

    const hora = messageDate.getHours();
    const minutos = messageDate.getMinutes();

    const horarioFormatado = `${hora < 10 ? '0' + hora : hora}:${minutos < 10 ? '0' + minutos : minutos}`;

    return horarioFormatado;
}