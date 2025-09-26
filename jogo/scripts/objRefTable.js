const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform
	];
};
self.C3_JsPropNameTable = [
	{Sólido: 0},
	{Sprite: 0},
	{Plataforma: 0},
	{Sprite2: 0},
	{Sprite3: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {}
}