'use babel';

import AtomAbbreviationView from './atom-abbreviation-view';
import { CompositeDisposable } from 'atom';

export default {

  atomAbbreviationView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.atomAbbreviationView = new AtomAbbreviationView(state.atomAbbreviationViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.atomAbbreviationView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-abbreviation:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.atomAbbreviationView.destroy();
  },

  serialize() {
    return {
      atomAbbreviationViewState: this.atomAbbreviationView.serialize()
    };
  },

  toggle() {
    console.log('AtomAbbreviation was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
