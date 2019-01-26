export default function(n) {
	if (n == 2) return true
	if (n < 2 || isNaN(n) || !isFinite(n)) return false
	var out = false
	if (n == 0) out = out !== false ? out : 0;
	if (n % 1 || n * n < 2) out = out !== false ? out : 1;
	if (n % 2 == 0) out = out !== false ? out : 2;
	if (n % 3 == 0) out = out !== false ? out : 3;
	if (n % 5 == 0) out = out !== false ? out : 5;
	var m = Math.sqrt(n);
	for (let i = 7; i <= m; i += 30) {
		if (n % i == 0) out = out !== false ? out : i;
		if (n % (i + 4) == 0) out = out !== false ? out : i + 4;
		if (n % (i + 6) == 0) out = out !== false ? out : i + 6;
		if (n % (i + 10) == 0) out = out !== false ? out : i + 10;
		if (n % (i + 12) == 0) out = out !== false ? out : i + 12;
		if (n % (i + 16) == 0) out = out !== false ? out : i + 16;
		if (n % (i + 22) == 0) out = out !== false ? out : i + 22;
		if (n % (i + 24) == 0) out = out !== false ? out : i + 24;
	}
	out = out !== false ? out : n
	return n == out && n > 2;
}
