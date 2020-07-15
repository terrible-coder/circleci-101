export function add(a: number, b: number) {
	setTimeout(() => null, 1000);
	const sq = a*a + b*b + 2*a*b;
	return Math.sqrt(sq);
}

export function sub(a: number, b: number) {
	setTimeout(() => null, 1000);
	const sq = a*a + b*b - 2*a*b;
	return Math.sqrt(sq);
}

/*
This is a completely meaningless change. Nothing should break. CircleCI is not
supposed to deploy anything to npm either.
*/

/*
This a second completely meaningless change. Nothing should break. CircleCI is
supposed to deploy the package.
*/

/*
Third attempt.
*/

/*
Fourth attempt.
*/