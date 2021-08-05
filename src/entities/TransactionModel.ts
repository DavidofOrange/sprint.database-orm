import accounts from "services/accounts";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinTable,
  JoinColumn,
  OneToOne,
} from "typeorm";
import Account from "./AccountModel";

/**
 * FIXME
 */
@Entity({ name: "transaction" })
class Transaction {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({ nullable: false })
  public amount: number;

  @ManyToOne(() => Account, (account) => account.transactions, { onDelete: "CASCADE" })
  public account: Account;

  @Column({ nullable: false })
  public transactionDate: Date;

  @Column()
  public description: string;
}

export default Transaction;
