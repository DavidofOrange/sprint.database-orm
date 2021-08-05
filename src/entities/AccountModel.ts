import { table } from "console";
import transactions from "services/transactions";
import { Entity, OneToMany, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, ManyToMany } from "typeorm";
import Transaction from "./TransactionModel";
import User from "./UserModel";

/**
 * FIXME
 */
@Entity({ name: "account" })
class Account {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @ManyToOne(() => Transaction, (transaction) => transaction.id)
  public transactions: Transaction[];

  @Column({ nullable: false })
  public name: string;

  @ManyToOne(() => User, (user) => user.id)
  public owner: User;
}

export default Account;
