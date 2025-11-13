# 🚀 Guide de Déploiement - GitHub & Vercel

## Étape 1 : Créer un dépôt GitHub

### 1.1 Créer un compte GitHub (si vous n'en avez pas)
1. Allez sur [github.com](https://github.com)
2. Cliquez sur "Sign up"
3. Suivez les étapes d'inscription

### 1.2 Créer un nouveau dépôt
1. Une fois connecté, cliquez sur le **+** en haut à droite
2. Sélectionnez **"New repository"**
3. Remplissez les informations :
   - **Repository name** : `france-pvp-reglement` (ou le nom de votre choix)
   - **Description** : "Site de règlement France PvP - Serveur FiveM"
   - Laissez en **Public** (ou Private si vous voulez)
   - **NE cochez PAS** "Initialize this repository with a README"
4. Cliquez sur **"Create repository"**

---

## Étape 2 : Pousser votre code sur GitHub

### 2.1 Ouvrir le terminal dans votre dossier
1. Ouvrez PowerShell dans le dossier `C:\Users\Martin\Documents\programs\FRANCE`
2. Ou faites **clic droit** dans le dossier → "Ouvrir dans le terminal"

### 2.2 Initialiser Git et pousser le code

Copiez et exécutez ces commandes **une par une** :

```bash
# 1. Initialiser Git
git init

# 2. Ajouter tous les fichiers
git add .

# 3. Créer le premier commit
git commit -m "Premier commit - Site de règlement France PvP"

# 4. Renommer la branche en main
git branch -M main

# 5. Lier votre dépôt GitHub (REMPLACEZ VOTRE-USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/VOTRE-USERNAME/france-pvp-reglement.git

# 6. Pousser le code sur GitHub
git push -u origin main
```

**⚠️ IMPORTANT** : À l'étape 5, remplacez `VOTRE-USERNAME` par votre vrai nom d'utilisateur GitHub !

### 2.3 Si Git vous demande de vous connecter
- Entrez votre nom d'utilisateur GitHub
- Pour le mot de passe, utilisez un **Personal Access Token** (pas votre mot de passe habituel)

#### Comment créer un Token :
1. Allez sur GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Cliquez sur "Generate new token"
3. Donnez un nom : "Vercel Deploy"
4. Cochez : `repo` (full control)
5. Cliquez sur "Generate token"
6. **COPIEZ LE TOKEN** (vous ne pourrez plus le voir après !)
7. Utilisez ce token comme mot de passe

---

## Étape 3 : Déployer sur Vercel

### 3.1 Créer un compte Vercel
1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur **"Sign Up"**
3. Choisissez **"Continue with GitHub"** (recommandé)
4. Autorisez Vercel à accéder à votre GitHub

### 3.2 Importer votre projet
1. Sur le dashboard Vercel, cliquez sur **"Add New..."** → **"Project"**
2. Vous verrez la liste de vos dépôts GitHub
3. Trouvez `france-pvp-reglement` et cliquez sur **"Import"**

### 3.3 Configuration du déploiement
1. **Project Name** : Laissez le nom par défaut ou changez-le
2. **Framework Preset** : Sélectionnez "Other" ou laissez vide
3. **Root Directory** : Laissez `./`
4. Ne touchez pas aux autres paramètres
5. Cliquez sur **"Deploy"**

### 3.4 Attendre le déploiement
- Vercel va construire et déployer votre site (environ 30 secondes)
- Une fois terminé, vous verrez : **"Congratulations!"** 🎉
- Votre site est en ligne !

---

## 🌐 Votre site est en ligne !

Vercel vous donnera une URL comme :
```
https://france-pvp-reglement.vercel.app
```

Vous pouvez :
- ✅ Partager cette URL avec vos joueurs
- ✅ Personnaliser le domaine (optionnel)
- ✅ Le site se met à jour automatiquement quand vous poussez sur GitHub

---

## 🔄 Mettre à jour votre site

Quand vous modifiez des fichiers localement :

```bash
# 1. Ajouter les modifications
git add .

# 2. Créer un commit
git commit -m "Mise à jour du règlement"

# 3. Pousser sur GitHub
git push
```

Vercel détectera automatiquement les changements et redéploiera votre site ! 🚀

---

## 🎨 Domaine personnalisé (optionnel)

### Si vous avez un domaine (ex: reglement.france-pvp.fr)

1. Sur Vercel, allez dans **Settings** de votre projet
2. Cliquez sur **"Domains"**
3. Ajoutez votre domaine personnalisé
4. Suivez les instructions pour configurer les DNS

---

## ❓ Problèmes fréquents

### "Git n'est pas reconnu"
→ Installez Git : [git-scm.com](https://git-scm.com/download/win)

### "Permission denied" sur GitHub
→ Utilisez un Personal Access Token au lieu de votre mot de passe

### Le site ne s'affiche pas correctement
→ Vérifiez que votre fichier `logo.png` est bien dans le dossier

### Le curseur personnalisé ne marche pas
→ Normal, c'est désactivé sur mobile et certains navigateurs

---

## 📱 Bonus : QR Code

Une fois votre site en ligne, vous pouvez :
1. Générer un QR code sur [qr-code-generator.com](https://www.qr-code-generator.com/)
2. Entrez l'URL de votre site Vercel
3. Téléchargez le QR code
4. Partagez-le sur Discord/réseaux sociaux

---

## ✅ Checklist finale

- [ ] Code poussé sur GitHub
- [ ] Projet importé sur Vercel
- [ ] Site accessible via l'URL Vercel
- [ ] Image `logo.png` présente dans le dossier
- [ ] Test du site sur mobile
- [ ] URL partagée avec l'équipe

---

**Votre site est maintenant professionnel, hébergé gratuitement, et se met à jour automatiquement ! 🎉**

