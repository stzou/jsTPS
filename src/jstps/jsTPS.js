import jsTPS_Transaction from 'jsTPS_Transaction';

export class jsTPS extends Component {
    state = {
        mostRecentTransaction: -1,
        performingDo: false,
        performingUndo: false,
    }
    transactions = [];

    isPerformingDo = () => {
        return this.state.isPerformingDo;
    }

    isPerformingUndo = () => {
        return this.state.performingUndo;
    }
    
    addTransaction = (transaction) => {
        if ((this.statemostRecentTransaction < 0)|| (this.state.mostRecentTransaction < (transactions.length-1))) {
            for (var i = transactions.length-1; i > this.state.mostRecentTransaction; i--) {
                this.transactions.splice(i);
            }
        }
        this.transactions.push(transaction);
        this.doTransaction();        
    }

    doTransaction = () => {
        if (this.hasTransactionToRedo()) {
            this.setState({performingDo: true});
            transaction = transactions[mostRecentTransaction+1];
            transaction.doTransaction();
            this.setState({mostRecentTransaction: this.state.mostRecentTransaction+1});
            this.setState({performingDo: false});
        }
    }
    
    peekUndo = () => {
        if (this.hasTransactionToUndo()) {
            return transactions[mostRecentTransaction];
        }
        else
            return null;
    }
      
    peekDo() {
        if (this.hasTransactionToRedo()) {
            return transactions[mostRecentTransaction+1];
        }
        else
            return null;
    }

    undoTransaction = () => {
        if (this.hasTransactionToUndo()) {
            this.setState({performingUndo: true});
            transaction = transactions[mostRecentTransaction];
            transaction.undoTransaction();
            this.setState({mostRecentTransaction: this.state.mostRecentTransaction-1});
            this.setState({performingUndo: false});
        }
    }

    clearAllTransactions = () => {
        transactions = [];
        this.setState({mostRecentTransaction: -1});   
    }
    
    getSize = () => {
        return this.transactions.length;
    }

    getRedoSize = () => {
        return this.getSize() - this.state.mostRecentTransaction - 1;
    }
    
    getUndoSize = () => {
        return this.state.mostRecentTransaction + 1;
    }
    
    hasTransactionToUndo = () => {
        return this.state.mostRecentTransaction >= 0;
    }

    hasTransactionToRedo = () => {
        return this.state.mostRecentTransaction < (transactions.size()-1);
    }

    toString = () => {
        let text = "--Number of Transactions: " + transactions.size() + "\n";
        text += "--Current Index on Stack: " + this.state.mostRecentTransaction + "\n";
        text += "--Current Transaction Stack:\n";
        for (var i = 0; i <= this.state.mostRecentTransaction; i++) {
            jT = transactions[i];
            text += "----" + jT.toString() + "\n";
        }
        return text;
    }
}

export default jsTPS