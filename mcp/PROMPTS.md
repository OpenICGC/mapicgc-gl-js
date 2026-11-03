# Prompts d'exemple per provar mapicgc-mcp

Bateria de prompts per provar, un a un, al xat de VS Code (mode **Agent**) amb
el servidor `mapicgc-mcp` connectat. Pensats per mostrar cada eina per separat
i, al final, casos combinats on l'agent ha de triar i encadenar diverses eines
tot sol.

## 🚀 Primers passos (`get_started`)

```
Vull començar un projecte amb mapicgc-gl-js des de zero. Explica'm com instal·lar-lo i fes-me un exemple mínim.
```

## 🔍 Cerca lliure (`search_docs`)

```
Busca a la documentació de mapicgc-gl-js tot el relacionat amb "popup" i resumeix-m'ho.
```

```
No sé com es diu el mètode, però vull que quan cliqui una capa em surti informació. Busca'm com es fa.
```

## 📖 Documentació exacta (`get_api`)

```
Explica'm tots els paràmetres de Map.addFeatureQuery, amb tipus i descripció.
```

```
Quina diferència hi ha entre addVectorLayerICGC i addFGBLayerICGC segons la seva documentació?
```

## 💡 Exemples de codi (`get_example`)

```
Dona'm el codi sencer (format CDN) per crear un comparador de dos mapes, un amb ortofoto i l'altre amb mapa topogràfic.
```

```
Vull un exemple d'un mapa amb un selector d'estils (menú per canviar entre TOPO, ORTO i DARK).
```

## 🌍 Dades en viu (`list_styles`)

```
Quants terrenys 3D i quantes capes vectorials administratives té disponibles l'ICGC ara mateix?
```

## 📜 Historial (`get_changelog`)

```
Quines novetats va portar la versió 1.0.0 de mapicgc-gl-js?
```

## 🧩 Combinats (la prova de foc)

```
Crea'm un mapa centrat a Girona amb estil fosc, que tingui geolocalització, un control d'exportació i un marcador a la catedral. Explica cada decisió que prenguis citant la font.
```

```
Fes-me un visor comparatiu: a l'esquerra el mapa amb terreny 3D d'alta resolució, a la dreta l'estil ORTOHYBRID. Digue'm també quina és l'API real que fas servir per cadascun (no t'ho inventis).
```

## 🎭 Prompt registrat (`crear_mapa`)

Des de VS Code, cercant `/` al quadre de xat:

```
/mcp.mapicgc.crear_mapa estil:ORTO3D ubicacio:"Vall de Núria"
```
