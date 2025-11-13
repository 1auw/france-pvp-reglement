# 📸 Guide d'Intégration des Images

## Où placer vos images GTA/FiveM

### 1️⃣ Image du Header (Grande bannière en haut)

**Fichier:** `index.html` - Ligne 15

```html
<img src="https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=2000" alt="France PvP" class="header-bg-image">
```

**Remplacez par:**
```html
<img src="votre-image-header.jpg" alt="France PvP" class="header-bg-image">
```

**Dimensions recommandées:** 2000x800px minimum
**Format:** JPG ou PNG
**Utilisation:** Une image spectaculaire de GTA/FiveM en action

---

### 2️⃣ Image de Section (Petite image à côté du titre)

**Fichier:** `index.html` - Ligne 74

```html
<img src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800" alt="Règles Standard">
```

**Remplacez par:**
```html
<img src="votre-image-section.jpg" alt="Règles Standard">
```

**Dimensions recommandées:** 800x480px
**Format:** JPG ou PNG
**Utilisation:** Une image qui représente la section (ex: voitures pour règles standard, armes pour gunfight, etc.)

---

## 💡 Comment ajouter vos propres images

### Option 1: Images locales (dans le même dossier)

1. Placez vos images dans le dossier du site (à côté de index.html)
2. Nommez-les clairement : `header-main.jpg`, `section-standard.jpg`, etc.
3. Dans le HTML, utilisez simplement le nom du fichier :

```html
<img src="header-main.jpg" alt="France PvP">
```

### Option 2: Images en ligne (hébergées ailleurs)

1. Uploadez vos images sur un service (Imgur, Discord, etc.)
2. Copiez l'URL de l'image
3. Collez l'URL complète dans le `src`:

```html
<img src="https://votre-lien-image.com/image.jpg" alt="France PvP">
```

---

## 🎨 Conseils pour des images classe

### Pour le Header (bannière principale):
- ✅ Utilisez une image sombre ou ajoutez un filtre sombre
- ✅ Évitez les images trop chargées
- ✅ Privilégiez les paysages urbains de GTA/Los Santos
- ✅ La résolution doit être haute (minimum 1920px de large)

### Pour les Sections:
- ✅ Images nettes et de bonne qualité
- ✅ Ratio 16:9 (ex: 800x480px)
- ✅ Thématiques selon la section
- ✅ Évitez les screenshots avec HUD/interface

---

## 📝 Liste des emplacements d'images

### Header
- **Ligne 15** de `index.html` - Image principale du header

### Sections (à ajouter si vous voulez)
- **Ligne 74** - Règles Standard
- Vous pouvez ajouter la même structure pour les autres sections (Gangs, Gunfight, etc.)

---

## 🔧 Structure à copier pour ajouter des images aux autres sections

Pour ajouter une image à d'autres sections (Gangs, Gunfight, etc.), copiez cette structure :

```html
<section class="rules-section" id="NOM-SECTION">
    <div class="section-header">
        <div class="section-header-content">
            <h2><i class="fas fa-ICON"></i> Titre de la Section</h2>
        </div>
        <div class="section-image">
            <img src="votre-image.jpg" alt="Description">
        </div>
    </div>
    
    <!-- Reste du contenu -->
</section>
```

---

## ❓ Questions fréquentes

**Q: Quelle taille de fichier maximum ?**
R: Idéalement moins de 500KB par image pour un chargement rapide

**Q: Quel format est le meilleur ?**
R: JPG pour les photos, PNG si vous avez besoin de transparence

**Q: Les images ralentissent-elles le site ?**
R: Non si elles sont optimisées (compressées). Utilisez TinyPNG.com pour réduire la taille

**Q: Puis-je ne pas mettre d'images ?**
R: Oui, supprimez simplement les sections `<div class="section-image">` et le site fonctionnera sans

---

## 🎯 Exemples d'images à utiliser

- Header : Vue panoramique de Los Santos la nuit
- Standard : Personnages avec différentes tenues
- Gangs : Groupe de joueurs ensemble
- Gunfight : Scène d'action/combat
- Zone Orange : Parachutistes qui descendent
- Wager : Interface de combat 1v1

