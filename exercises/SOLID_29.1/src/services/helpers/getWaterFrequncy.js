const getWaterFrequency = (needsSun, origin, specialCare, size) => {
  const waterFrequency = needsSun ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
    : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);
  return { waterFrequency, ...specialCare };
};

module.exports = getWaterFrequency;
