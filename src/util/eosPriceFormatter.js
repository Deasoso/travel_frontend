const EosPriceFormatter = {
  formatPrice(price) {
    return `${(price / 10000).toFixed(4)} EOS`;
  },
  formatPriceToCCC(price) {
    return `${(price / 10000).toFixed(4)} CCC`;
  },
  install(Vue) {
    Vue.filter('price', value => EosPriceFormatter.formatPrice(value));
  },
};

export default EosPriceFormatter;
