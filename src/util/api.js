import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs';
import Eos from 'eosjs';
import * as config from '../config';
import PriceFormatter from './eosPriceFormatter';

ScatterJS.plugins(new ScatterEOS());

// @trick: use function to lazy eval Scatter eos, in order to avoid no ID problem.
const eos = () => ScatterJS.scatter.eos(config.network, Eos, { expireInSeconds: 60 });
// const historyeos = () => ScatterJS.scatter.eos(config.history, Eos, { expireInSeconds: 60 });

const currentEOSAccount = () => ScatterJS.scatter.identity && ScatterJS.scatter.identity.accounts.find(x => x.blockchain === 'eos');

const API = {
  async getchaincode() {
    const { rows } = await eos().getTableRows({
      json: true,
      code: 'ceshiyongeos',
      scope: 'ceshiyongeos',
      table: 'user',
      limit: 1024,
    });
    return rows;
  },
  async AddorderAsync(
    from = currentEOSAccount(),
  ){
    const contract = await eos().contract('ceshiyongeos');
    await contract.joinbuybackq(
      from.name,
      PriceFormatter.formatPriceToCCC(amount),
      {
        authorization: [`${from.name}@${from.authority}`],
      },
    );
  },
  async getBalancesByContract({ tokenContract = 'eosio.token', accountName, symbol }) {
    return eos().getCurrencyBalance(tokenContract, accountName, symbol);
  },
  getmyself(){
    return currentEOSAccount().name;
  },
  connectScatterAsync() {
    // alert("scatter connecting...");
    return ScatterJS.scatter.connect(config.appScatterName, { initTimeout: 2000 });
  },
  loginScatterAsync() {
    // alert("scatter logging...");
    const requiredFields = { accounts: [config.network] };
    return ScatterJS.scatter.getIdentity(requiredFields);
  },
  logoutScatterAsync() {
    return ScatterJS.scatter.forgetIdentity();
  },
  transferEOSAsync({
    from = currentEOSAccount(),
    to,
    memo = '',
    amount = 0,
  }) {
    return eos().transfer(
      from.name,
      to,
      PriceFormatter.formatPrice(amount),
      memo, {
        authorization: [`${from.name}@${from.authority}`],
      },
    );
  },
  install(Vue) {
    Object.defineProperties(Vue.prototype, {
      $API: {
        get() {
          return API;
        },
      },
    });
  },
};

export default API;
export { eos, currentEOSAccount };
