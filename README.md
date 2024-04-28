# Dog Breeds API

This API provides information about more than 400 dog breeds.

## Endpoints

### `GET /families`

Returns a list of all available dog families.

#### Parameters

- `lang`: The language of the request.

#### Response

Returns a JSON object with the following properties:

- `id`: The unique identifier of the breed.
- `internal_name`: The name of the family used internally.
- `language_code`: The language of the information about the family.
- `name`: The name of the family.
- `description`: The description of the family.

Example response:

```json
[
  {
    "id": 1,
    "internal_name": "Sighthounds",
    "language_code": "es_ES",
    "name": "Lebreles",
    "description": "Los perros de familia lebreles son perros cazadores que dependen más de la vista que del olfato, pertenecen a las razas más antiguas registradas. Su origen se ubica en Oriente Medio, el sur de la Unión Soviética y África. Por lo general, estos canes tienen un cuerpo esbelto que puede aparentar fragilidad, pero como mascotas resultan notables por su elegancia y belleza."
  },
  {
    "id": 2,
    "internal_name": "Mastiffs",
    "language_code": "es_ES",
    "name": "Molosos",
    "description": "Los perros de familia molosos son una categoría de razas caninas que se caracterizan por tener una estructura física robusta y musculosa. Estos canes tienen un origen antiguo y han sido utilizados a lo largo de la historia como perros de guarda y protección. En general, los perros de familia molosos son leales y protectores con sus dueños y su hogar."
  },
  {
    "id": 3,
    "internal_name": "Nordic",
    "language_code": "es_ES",
    "name": "Nórdicos",
    "description": "Los perros de familia nórdica son una categoría de razas caninas que se originaron en las regiones del norte de Europa, especialmente en Escandinavia. Estos perros están adaptados a climas fríos y a menudo tienen una capa gruesa y peluda que los protege del frío y la nieve. Estos perros tienen una personalidad única y son conocidos por ser leales, cariñosos y protectores con su familia humana."
  }
]
```

### `GET /family/{id}`

Returns information about a specific dog family, based on the provided ID.

#### Parameters

- `id` (required): The ID of the family to retrieve information for.
- `lang` (optional): The language code to use for the response. If not provided, the default language (English) will be used.

#### Response

Returns a JSON object with the following properties:

- `id`: The ID of the family.
- `internal_name`: The internal name of the family.
- `language_code`: The language code used for the response.
- `name`: The name of the family in the requested language.
- `description`: The description of the family in the requested language. If no description is available, this will be an empty string.

Example response:

```json
[
  {
    "id": 1,
    "internal_name": "Sighthounds",
    "language_code": "es_ES",
    "name": "Lebreles",
    "description": "Los perros de familia lebreles son perros cazadores que dependen más de la vista que del olfato, pertenecen a las razas más antiguas registradas. Su origen se ubica en Oriente Medio, el sur de la Unión Soviética y África. Por lo general, estos canes tienen un cuerpo esbelto que puede aparentar fragilidad, pero como mascotas resultan notables por su elegancia y belleza."
  }
]
```

### `POST /families`

Create a new family and its translations.

#### Parameters

- `internal_name` (required, string): The internal name of the family.
- `translations` (required, array): An array of translation objects, each containing the following fields:
  - `language_code` (required, string): The language code of the translation.
  - `name` (required, string): The name of the family in the specified language (es_ES, en_EN, ...).
  - `description` (required, string): The description of the family in the specified language.

#### Response

- `Status Code`: 201 Created.

### GET `/breeds`

Returns a list of dog breeds, with the option to filter the response by language.

#### Parameters

- `lang` (optional): The language code to use for the response. If not provided, the default language (English) will be used.

#### Response

Returns a JSON object with the following properties:

- `id`: The unique identifier for the breed.
- `internal_name`: The internal name for the breed.
- `original_name`: The original name for the breed.
- `min_height`: The minimum height (in centimeters) for the breed.
- `max_height`: The maximum height (in centimeters) for the breed.
- `min_weight`: The minimum weight (in kilograms) for the breed.
- `max_weight`: The maximum weight (in kilograms) for the breed.
- `family_name`: The family name for the breed.
- `language_code`: The language code for the breed (e.g. "en_US", "es_ES", etc.).
- `name`: The name of the breed.
- `appearance`: A description of the breed's appearance.
- `history`: A brief history of the breed.
- `behavior`: A description of the breed's behavior.
- `associations`: A list of breed associations (e.g. AKC, FCI, etc.).
- `traits`: A list of traits associated with the breed.

Example response:

```json
[
    {
        "id": 1,
        "internal_name": "Afgano",
        "original_name": "Tazi, Baluchi Hound",
        "min_height": 61,
        "max_height": 71,
        "min_weight": 23,
        "max_weight": 28,
        "family_name": "Lebreles",
        "language_code": "es_ES",
        "name": "Lebrel Afgano",
        "appearance": "El Afgano es un perro que se distingue por su porte aristocrático, su cabeza erguida y su mirada hacia el horizonte, lo que le da un aire exótico y digno. Su cuerpo está cubierto por un pelaje sedoso, suave al tacto y muy abundante, que realza su elegante figura. La cabeza es delgada y alargada, mientras que sus patas son grandes y peludas. La cola, ligeramente cubierta de pelo largo, forma un anillo en la punta. En cuanto a su tamaño, los Afganos miden entre 61 y 71 centímetros y pesan entre 23 y 28 kilos. Esta raza presenta una gran variedad de colores sólidos, bicolores y tricolores.",
        "history": "La procedencia de los Afganos es incierta, pero han permanecido en la Tierra durante siglos y lo seguirán haciendo. Según los relatos de los shiks afganos, Noé eligió al Afgano como una de las razas para llevar en el Arca. Aunque no se puede determinar con exactitud sus orígenes, se sabe que la ascendencia de estos canes data de hace muchos siglos atrás, antes de Cristo. Incluso se han encontrado imágenes de los antepasados del Afgano en grabados de hallazgos arqueológicos. En su país de origen, estos perros son muy valiosos, y se han dado casos de ejemplares que han sido robados por sus propietarios después de venderlos a otros interesados. Su trabajo ha sido variado, desde proteger rebaños de ovejas y ganado hasta cazar gamos y otros animales salvajes. En la actualidad, se utilizan como perros de compañía y para exposiciones caninas. Son conocidos por su valentía y habilidad, y se dice que han llegado a matar leopardos y panteras.",
        "behavior": "El galgo Afgano es conocido por su amabilidad y afectuosidad, y parece haber heredado una sabiduría de sus antepasados del desierto. Aunque puede ser reservado con extraños, es muy alegre y sociable con sus dueños. El ejercicio regular es esencial para su bienestar, así como disponer de suficiente espacio para correr y jugar.",
        "associations": "AKC; ANKC; CKC; FCI; KCGB; UKC",
        "traits": "Lebrel; Pelo de cuidados especiales; Perro de caza mayor; Requiere ejercicio regular"
    },
    {...},
    {...}
]
```

### `GET /breeds/{id}`

Returns information about a specific dog breed, based on the provided ID.

#### Parameters

- `id` (required): The ID of the breed to retrieve information for.
- `lang` (optional): The language code to use for the response. If not provided, the default language (English) will be used.

#### Response

Returns a JSON object with the following properties:

- `id`: The unique identifier for the breed.
- `internal_name`: The internal name for the breed.
- `original_name`: The original name for the breed.
- `min_height`: The minimum height (in centimeters) for the breed.
- `max_height`: The maximum height (in centimeters) for the breed.
- `min_weight`: The minimum weight (in kilograms) for the breed.
- `max_weight`: The maximum weight (in kilograms) for the breed.
- `family_name`: The family name for the breed.
- `language_code`: The language code for the breed (e.g. "en_US", "es_ES", etc.).
- `name`: The name of the breed.
- `appearance`: A description of the breed's appearance.
- `history`: A brief history of the breed.
- `behavior`: A description of the breed's behavior.
- `associations`: A list of breed associations (e.g. AKC, FCI, etc.).
- `traits`: A list of traits associated with the breed.

Example response:

```json
[
  {
    "id": 1,
    "internal_name": "Afgano",
    "original_name": "Tazi, Baluchi Hound",
    "min_height": 61,
    "max_height": 71,
    "min_weight": 23,
    "max_weight": 28,
    "family_name": "Lebreles",
    "language_code": "es_ES",
    "name": "Lebrel Afgano",
    "appearance": "El Afgano es un perro que se distingue por su porte aristocrático, su cabeza erguida y su mirada hacia el horizonte, lo que le da un aire exótico y digno. Su cuerpo está cubierto por un pelaje sedoso, suave al tacto y muy abundante, que realza su elegante figura. La cabeza es delgada y alargada, mientras que sus patas son grandes y peludas. La cola, ligeramente cubierta de pelo largo, forma un anillo en la punta. En cuanto a su tamaño, los Afganos miden entre 61 y 71 centímetros y pesan entre 23 y 28 kilos. Esta raza presenta una gran variedad de colores sólidos, bicolores y tricolores.",
    "history": "La procedencia de los Afganos es incierta, pero han permanecido en la Tierra durante siglos y lo seguirán haciendo. Según los relatos de los shiks afganos, Noé eligió al Afgano como una de las razas para llevar en el Arca. Aunque no se puede determinar con exactitud sus orígenes, se sabe que la ascendencia de estos canes data de hace muchos siglos atrás, antes de Cristo. Incluso se han encontrado imágenes de los antepasados del Afgano en grabados de hallazgos arqueológicos. En su país de origen, estos perros son muy valiosos, y se han dado casos de ejemplares que han sido robados por sus propietarios después de venderlos a otros interesados. Su trabajo ha sido variado, desde proteger rebaños de ovejas y ganado hasta cazar gamos y otros animales salvajes. En la actualidad, se utilizan como perros de compañía y para exposiciones caninas. Son conocidos por su valentía y habilidad, y se dice que han llegado a matar leopardos y panteras.",
    "behavior": "El galgo Afgano es conocido por su amabilidad y afectuosidad, y parece haber heredado una sabiduría de sus antepasados del desierto. Aunque puede ser reservado con extraños, es muy alegre y sociable con sus dueños. El ejercicio regular es esencial para su bienestar, así como disponer de suficiente espacio para correr y jugar.",
    "associations": "AKC; ANKC; CKC; FCI; KCGB; UKC",
    "traits": "Lebrel; Pelo de cuidados especiales; Perro de caza mayor; Requiere ejercicio regular"
  }
]
```

### `GET /associations`

Returns a list of all dog associations.

#### Response

Returns a JSON object with the following properties:

- `id`: The unique identifier of the breed.
- `name`: The acronym of the association.
- `long_name`: The complete name of the association.

Example response:

```json
[
    {
        "id": 1,
        "name": "FCI",
        "long_name": "Fédération Cynologique Internationale"
    },
    {
        "id": 2,
        "name": "AKC",
        "long_name": "American Kennel Club"
    },
    {...}
]
```

### `GET /associations/{id}`

Returns information about a specific association, based on the provided ID.

#### Parameters

- `id` (required): The ID of the association to retrieve information for.

#### Response

Returns a JSON object with the following properties:

- `id`: The unique identifier of the breed.
- `name`: The acronym of the association.
- `long_name`: The complete name of the association.

Example response:

```json
[
  {
    "id": 1,
    "name": "FCI",
    "long_name": "Fédération Cynologique Internationale"
  }
]
```

### `GET /traits`

Returns a list of all dog traits.

#### Response

Returns a JSON object with the following properties:

- `id`: The unique identifier of the breed.
- `internal_name`: The name of the trait used internally.
- `language_code`: The language of the information about the trait.
- `name`: The name of the trait.

Example response:

```json
[
    {
        "id": 1,
        "internal_name": "Lebrel",
        "language_code": "es_ES",
        "name": "Lebrel"
    },
    {
        "id": 2,
        "internal_name": "Ratonero/Terrier",
        "language_code": "es_ES",
        "name": "Ratonero/Terrier"
    },
    {...}
]
```

### `GET /traits/{id}`

Returns information about a specific trait, based on the provided ID.

#### Parameters

- `id` (required): The ID of the trait to retrieve information for.

#### Response

Returns a JSON object with the following properties:

- `id`: The unique identifier of the breed.
- `internal_name`: The name of the trait used internally.
- `language_code`: The language of the information about the trait.
- `name`: The name of the trait.

Example response:

```json
[
  {
    "id": 1,
    "internal_name": "Lebrel",
    "language_code": "es_ES",
    "name": "Lebrel"
  }
]
```

### `GET /languages`

Returns a list of all available languages.

#### Response

Returns a JSON object with the following properties:

- `code`: The code of the language.
- `internal_name`: The name of the language.
- `script_direction`: The script direction of the language (LTR or RTL).

Example response:

```json
[
    {
        "code": "en_EN",
        "internal_name": "English (UK)",
        "script_direction": "ltr"
    },
    {
        "code": "es_ES",
        "internal_name": "Español (España)",
        "script_direction": "ltr"
    },
    {...}
]
```

### `GET /languages/{code}`

Returns information about a specific language, based on the provided code.

#### Parameters

- `code` (required): The code of the langauge to retrieve information for.

#### Response

Returns a JSON object with the following properties:

- `code`: The code of the language.
- `internal_name`: The name of the language.
- `script_direction`: The script direction of the language (LTR or RTL).

Example response:

```json
[
  {
    "code": "en_EN",
    "internal_name": "English (UK)",
    "script_direction": "ltr"
  }
]
```
