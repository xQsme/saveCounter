// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let saved = context.globalState.get('saved', 0);
	let save=0;
	vscode.workspace.onWillSaveTextDocument(() => {
		save++;
		saved++;
		context.globalState.update('saved', saved);
		vscode.window.showInformationMessage(save + ' saves this session! ' + saved + " saves in total!");
	});

	let disposable = vscode.commands.registerCommand('extension.saveCounter', function () {
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
