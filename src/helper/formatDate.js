function dateFormat(date) {
  const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  const newDate = date.slice(0, 10);
  const dateTrim = new Date(newDate).toLocaleDateString().split('/');
  return `${dateTrim[0]} de ${meses[dateTrim[1] - 1]} de ${dateTrim[2]}`;
}

export default dateFormat;
