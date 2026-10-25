# Les commerçants du 17

Plateforme e-commerce développée en **React + Vite** dans le cadre d'un projet de formation.

L'application s'appuie sur l'API [Fake Store API](https://fakestoreapi.com/docs) pour les produits et sur une API **AuthRi7** pour l'authentification (connexion / inscription).

## Fonctionnalités

- **Page d'accueil** : affichage de tous les produits.
- **Navigation par catégorie** : sélection d'une catégorie dans l'en-tête, affichage des **5 derniers produits** de cette catégorie.
- **Détail d'un produit** : page dédiée avec image, description, prix et bouton d'ajout au panier.
- **Ajout au panier** : bouton d'ajout avec notification du nombre total d'articles sur l'icône du panier.
- **Gestion du panier** :
  - modification du nombre d'articles (`+` / `-`) ;
  - suppression d'un article ;
  - calcul automatique du total par article et du total de la commande.
- **Bonus** :
  - zone de recherche par nom de produit ;
  - gestion des produits (ajout, modification et suppression) réservée aux utilisateurs connectés.
- **Authentification** : inscription et connexion via l'API AuthRi7, routes de gestion protégées.

## Stack technique

| Outil | Usage |
| --- | --- |
| [React 19](https://react.dev/) | Interface utilisateur |
| [Vite](https://vite.dev/) | Serveur de développement et build |
| [React Router](https://reactrouter.com/) | Routage |
| [styled-components](https://styled-components.com/) | Composants stylés |
| [lucide-react](https://lucide.dev/) | Icônes (panier) |
| CSS | Styles des composants |
| [Fake Store API](https://fakestoreapi.com/docs) | Données produits |
| API AuthRi7 | Authentification |

## Prérequis

- [Node.js](https://nodejs.org/) (version 18 ou supérieure recommandée)
- npm

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/laurentgautron/projet_commerce.git
cd projet_commerce

# Installer les dépendances
npm install
```

## Variables d'environnement

Créer un fichier `.env` à la racine du projet :

- `VITE_FAKESTORE_URL` : URL de base de Fake Store API.
- `VITE_AUTHRI7_URL` : URL de base de l'API AuthRi7 (terminée par `/`).

> Le fichier `.env` ne doit pas être versionné.

## Démarrage

```bash
npm run dev
```

## Routes

| Route | Description | Accès |
| --- | --- | --- |
| `/` | Accueil / liste des produits | Public |
| `/articledetail/:articleId` | Détail d'un produit | Public |
| `/basket` | Panier | Public |
| `/connexion` | Connexion | Public |
| `/inscription` | Inscription | Public |
| `/add` | Ajouter un article | Connecté |
| `/modify/:articleId` | Modifier un article | Connecté |
| `*` | Page introuvable | Public |

Les routes `/add` et `/modify/:articleId` sont protégées par le composant `PrivateRoute`, qui redirige vers `/connexion` si l'utilisateur n'est pas authentifié.

## Structure du projet

```text
src/
├── Component/                  # Composants réutilisables
│   ├── BuyButton/              # Ajout au panier
│   ├── CategorySelection/      # Sélection de catégorie
│   ├── DetailButton/           # Lien vers le détail d'un produit
│   ├── Header/                 # En-tête du site
│   ├── NavLink/                # Lien de navigation stylé
│   ├── ShoppingBasket/         # Icône panier + compteur
│   └── ...
├── Context/
│   └── CategoryContext.jsx     # État global (panier, auth, catégorie)
├── features/
│   ├── auth/                   # Connexion, inscription et styles associés
│   ├── Hooks/                  # Hook de filtrage des produits
│   └── products/
│       ├── Component/          # Cartes, détail, formulaire, panier...
│       ├── Pages/              # Pages produits, panier, ajout, modification
│       ├── PrivateRoute/       # Protection des routes
│       └── utils.js            # Appels Fake Store API
├── App.jsx                     # Routes principales
└── main.jsx                    # Point d'entrée
```

## API

### Fake Store API

Les appels sont centralisés dans `src/features/products/utils.js` :

- `getProducts()` : récupère tous les produits ;
- `getCategories()` : récupère les catégories ;
- `getProductByCategory(category)` : produits d'une catégorie ;
- `getArticle(id)` : détail d'un produit ;
- `addProduct()` / `modifyProduct()` / `deleteArticle()` : gestion des produits.

> Fake Store API est une API de démonstration : les opérations d'écriture (POST, PUT, DELETE) sont simulées et ne sont pas persistées côté serveur.

### AuthRi7

Les appels sont centralisés dans `src/features/auth/utils.js` :

- `registerApiAuthRi7()` : inscription ;
- `loginApiAuthRi7()` : connexion ;
- `checkAuth()` : vérification du token stocké dans `sessionStorage`.

Le token est conservé dans `sessionStorage` sous la clé `authRi7-token`.

## Auteur

Projet réalisé par [Laurent Gautron](https://github.com/laurentgautron).
