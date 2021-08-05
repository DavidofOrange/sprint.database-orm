import { throws } from "assert";
import transactions from "services/transactions";
import { Repository, getRepository, DeleteResult } from "typeorm";
import { runInThisContext } from "vm";
import Account from "../../entities/AccountModel";
import { IManager } from "../common/manager";

interface AccountWithBalance extends Account {
  balance: number;
}

class AccountManager implements IManager {
  protected accountRepository: Repository<Account>;

  /**
   * FIXME
   * After defining the Account entity,
   * uncomment the lines in the constructor definition
   */
  constructor() {
    this.accountRepository = getRepository(Account);
  }

  /**
   * FIXME
   * Get an account
   *
   * Requirements:
   * - Derive balance (both debit and credit)
   */

  public async getAccount(accountId: string): Promise<AccountWithBalance> {
    // You are free to remove any lines below
    const account = <AccountWithBalance>await this.accountRepository.findOne(accountId);

    //derives account balance by aggregating all the transactions
    // if (account.transactions) {
    //   let accountBalanceDerived = 0.0;

    //   account.transactions.forEach((transaction) => {
    //     accountBalanceDerived += transaction.amount;
    //   });

    //   account.balance = accountBalanceDerived;
    // }

    return account;
  }

  /**
   * FIXME
   * create a new account
   */
  public async createAccount(details: Partial<Account>): Promise<Account> {
    const newAccount = <AccountWithBalance>new Account();
    newAccount.id = details.id;
    newAccount.transactions = details.transactions;
    newAccount.name = details.name;
    newAccount.owner = details.owner;

    return this.accountRepository.save(newAccount);
  }

  /**
   * FIXME
   * update account details
   */
  public async updateAccount(accountId: string, changes: Partial<Account>): Promise<Account> {
    const account = await this.accountRepository;
    account.update(accountId, changes);
    return this.getAccount(accountId);
  }

  /**
   * FIXME
   * delete account
   *
   * Requirements:
   * - Cascade and delete all transactions
   */
  public async deleteAccount(accountId: string): Promise<DeleteResult | void> {
    //stuck here tests are not passing
    console.log(accountId);
    await this.accountRepository.delete(accountId);
  }
}
export default AccountManager;
