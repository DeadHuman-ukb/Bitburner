/** @param {NS} ns */
export async function main(ns) {
	while (true) {
		ns.exec("hackcontrol.js", "home", 1);
		await ns.sleep(100000);
	}
}
