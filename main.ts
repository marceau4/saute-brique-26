namespace SpriteKind {
    export const clef = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite2, location) {
    nouveau_niveau()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.clef, function (sprite, otherSprite) {
    valeurporte = 0
    otherSprite.destroy()
    for (let index = 0; index < tiles.getTilesByType(assets.tile`myTile12`).length; index++) {
        tiles.setWallAt(tiles.getTilesByType(assets.tile`myTile12`)[valeurporte], false)
        tiles.setTileAt(tiles.getTilesByType(assets.tile`myTile12`)[valeurporte], assets.tile`myTile10`)
        valeurporte += 1
    }
    valeurporte = 0
    for (let index = 0; index < tiles.getTilesByType(assets.tile`myTile11`).length; index++) {
        tiles.setWallAt(tiles.getTilesByType(assets.tile`myTile11`)[valeurporte], false)
        tiles.setTileAt(tiles.getTilesByType(assets.tile`myTile11`)[valeurporte], assets.tile`myTile9`)
        valeurporte += 1
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy += -150
        if (imgmisprite == 0) {
            imgmisprite = 1
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        } else {
            imgmisprite = 0
            mySprite.setImage(img`
                . . . . . . . 5 . . . . . . . . 
                . . . . . . 5 5 5 . . . . . . . 
                . . . . . 5 5 5 5 5 . . . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . 5 5 5 5 5 5 5 5 5 5 . . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . . 5 5 5 5 5 5 5 5 5 5 . . . 
                . . . . 5 5 5 5 5 5 5 5 5 . . . 
                . . . . . 5 5 5 5 5 5 5 . . . . 
                . . . . . . 5 5 5 5 5 . . . . . 
                . . . . . . . 5 5 5 . . . . . . 
                . . . . . . . . 5 . . . . . . . 
                `)
        }
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 4861, 1404, 0, 238, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
})
function metre_les_clef () {
    valeurclef = 0
    for (let index = 0; index < tiles.getTilesByType(assets.tile`myTile8`).length; index++) {
        clef2 = sprites.create(img`
            . . . . d d d d d . . . . . . . 
            . . . d . . . . . d . . . . . . 
            . . . d . . . . . d . . . . . . 
            . . . d . . . . . d . . . . . . 
            . . . d . . . . . d . . . . . . 
            . . . d . . . . . d . . . . . . 
            . . . . d d d d d . . . . . . . 
            . . . . . d . . . . . . . . . . 
            . . . . . d . . . . . . . . . . 
            . . . . . d . . . . . . . . . . 
            . . . . . d . . . . . . . . . . 
            . . . . . d . . . . . . . . . . 
            . . . . . d . . . . . . . . . . 
            . . . . . d d d d . . . . . . . 
            . . . . . d d d d . . . . . . . 
            . . . . . d d d d . . . . . . . 
            `, SpriteKind.clef)
        tiles.placeOnTile(clef2, tiles.getTilesByType(assets.tile`myTile8`)[valeurclef])
        animation.runImageAnimation(
        clef2,
        [img`
            a a a a d d d d d a a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a a d d d d d a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            `,img`
            a a a a e e e e e a a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a a d d d d d a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            `,img`
            a a a a e e e e e a a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a a d d d d d a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            `,img`
            a a a a e e e e e a a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a a d d d d d a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            `,img`
            a a a a e e e e e a a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a a d d d d d a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            `,img`
            a a a a e e e e e a a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a a d d d d d a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            `,img`
            a a a a e e e e e a a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a a d d d d d a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            `,img`
            a a a a e e e e e a a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a a e e e e e a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            `,img`
            a a a a e e e e e a a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a a e e e e e a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            `,img`
            a a a a e e e e e a a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a a e e e e e a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            `,img`
            a a a a e e e e e a a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a a e e e e e a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            `,img`
            a a a a e e e e e a a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a a e e e e e a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            `,img`
            a a a a e e e e e a a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a a e e e e e a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            `,img`
            a a a a e e e e e a a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a a e e e e e a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            `,img`
            a a a a e e e e e a a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a a e e e e e a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            `,img`
            a a a a e e e e e a a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a a e e e e e a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a d d d d a a a a a a a 
            `,img`
            a a a a e e e e e a a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a a e e e e e a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            `,img`
            a a a a d d d d d a a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a a e e e e e a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            `,img`
            a a a a d d d d d a a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a a e e e e e a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            `,img`
            a a a a d d d d d a a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a a e e e e e a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            `,img`
            a a a a d d d d d a a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a a e e e e e a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            `,img`
            a a a a d d d d d a a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a e a a a a a e a a a a a a 
            a a a a e e e e e a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            `,img`
            a a a a d d d d d a a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a a e e e e e a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            `,img`
            a a a a d d d d d a a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a a d d d d d a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            `,img`
            a a a a d d d d d a a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a a d d d d d a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            `,img`
            a a a a d d d d d a a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a a d d d d d a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            `,img`
            a a a a d d d d d a a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a a d d d d d a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            `,img`
            a a a a d d d d d a a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a a d d d d d a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            `,img`
            a a a a d d d d d a a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a a d d d d d a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a e a a a a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            `,img`
            a a a a d d d d d a a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a a d d d d d a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            `,img`
            a a a a d d d d d a a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a a d d d d d a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a e e e e a a a a a a a 
            a a a a a e e e e a a a a a a a 
            `,img`
            a a a a d d d d d a a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a d a a a a a d a a a a a a 
            a a a a d d d d d a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d a a a a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a d d d d a a a a a a a 
            a a a a a e e e e a a a a a a a 
            `],
        50,
        true
        )
        valeurclef += 1
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.over(true)
    info.setScore(0)
    perdu()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite3, otherSprite2) {
    otherSprite2.destroy()
    paeclner += 1
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy += -150
        if (imgmisprite == 0) {
            imgmisprite = 1
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        } else {
            imgmisprite = 0
            mySprite.setImage(img`
                . . . . . . . 5 . . . . . . . . 
                . . . . . . 5 5 5 . . . . . . . 
                . . . . . 5 5 5 5 5 . . . . . . 
                . . . . 5 5 5 5 5 5 5 . . . . . 
                . . . 5 5 5 5 5 5 5 5 5 5 . . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . . 5 5 5 5 5 5 5 5 5 5 . . . 
                . . . . 5 5 5 5 5 5 5 5 5 . . . 
                . . . . . 5 5 5 5 5 5 5 . . . . 
                . . . . . . 5 5 5 5 5 . . . . . 
                . . . . . . . 5 5 5 . . . . . . 
                . . . . . . . . 5 . . . . . . . 
                `)
        }
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 4861, 1, 0, 238, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
})
function nouveau_niveau () {
    paeclner = 0
    leniveau += 1
    sprites.destroyAllSpritesOfKind(SpriteKind.clef)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    mySprite.setImage(img`
        . . . . . . . 5 . . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        `)
    tiles.setCurrentTilemap(Tilesmaps[NIVEAU])
    NIVEAU += 1
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile6`)
    metrre_les_piece()
    metre_les_clef()
    game.splash("niveau " + leniveau, "courage !")
}
function perdu () {
    game.showLongText("le meilleur joueur de monde est  " + blockSettings.readString("meilleur joueur") + "!", DialogLayout.Center)
    game.splash("il a eu un score de ", info.highScore())
}
function metrre_les_piece () {
    tableauemplacementpiece = tiles.getTilesByType(assets.tile`myTile3`)
    valeurpièce = 0
    for (let index = 0; index < tableauemplacementpiece.length - 1; index++) {
        if (leniveau < 3) {
            pièce = sprites.create(img`
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                `, SpriteKind.Food)
            tiles.placeOnTile(pièce, tableauemplacementpiece[valeurpièce])
            animation.runImageAnimation(
            pièce,
            assets.animation`monde 1`,
            100,
            true
            )
        } else {
            pièce = sprites.create(img`
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                `, SpriteKind.Food)
            tiles.placeOnTile(pièce, tableauemplacementpiece[valeurpièce])
            scene.setBackgroundColor(10)
            animation.runImageAnimation(
            pièce,
            assets.animation`monde 2`,
            100,
            true
            )
        }
        valeurpièce += 1
    }
}
sprites.onCreated(SpriteKind.Player, function (sprite) {
	
})
let cache: Sprite = null
let pièce: Sprite = null
let valeurpièce = 0
let clef2: Sprite = null
let valeurclef = 0
let valeurporte = 0
let tableauemplacementpiece: tiles.Location[] = []
let mySprite: Sprite = null
let NIVEAU = 0
let imgmisprite = 0
let leniveau = 0
let paeclner = 0
let Tilesmaps: tiles.TileMapData[] = []
let riendespecial = 0
let ancienms = info.highScore()
let nombre_de_piece = 0
Tilesmaps = [
tilemap`niveau 1`,
tilemap`niveau 2`,
tilemap`niveau 3`,
tilemap`niveau 0`,
tilemap`niveau 4`,
tilemap`niveau17`
]
paeclner = 0
leniveau = 1
imgmisprite = 0
NIVEAU = 0
mySprite = sprites.create(img`
    . . . . . . . 5 . . . . . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . . 5 5 5 5 5 5 5 5 5 . . . 
    . . . . . 5 5 5 5 5 5 5 . . . . 
    . . . . . . 5 5 5 5 5 . . . . . 
    . . . . . . . 5 5 5 . . . . . . 
    . . . . . . . . 5 . . . . . . . 
    `, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.Invisible, false)
tiles.setCurrentTilemap(Tilesmaps[NIVEAU])
NIVEAU += 1
controller.moveSprite(mySprite, 100, 0)
scene.setBackgroundColor(9)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile6`)
tableauemplacementpiece = tiles.getTilesByType(assets.tile`myTile3`)
game.splash("niveau " + leniveau, "courage !")
game.showLongText(tableauemplacementpiece.length, DialogLayout.Bottom)
game.showLongText(tableauemplacementpiece, DialogLayout.Bottom)
metrre_les_piece()
game.onUpdate(function () {
    mySprite.ay = 350
})
forever(function () {
    if (info.highScore() < ancienms) {
        game.showLongText("Bravo tu as eu le meilleur score, Tu as battu " + blockSettings.readString("meilleur joueur") + "!", DialogLayout.Center)
        blockSettings.writeString("meilleur joueur", game.askForString("quel est ton Prenom/Pseudo"))
    }
})
forever(function () {
	
})
forever(function () {
    if (mySprite.overlapsWith(pièce)) {
        cache = sprites.create(img`
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            `, SpriteKind.Player)
        tiles.placeOnTile(cache, pièce.tilemapLocation())
        pièce.destroy()
        info.changeScoreBy(1)
        riendespecial = 1
        light.showAnimation(light.sparkleAnimation, 2000)
        riendespecial = 0
    }
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile1`)) {
        game.showLongText("dommage", DialogLayout.Full)
        console.log("tu es tombé dans la lave")
        console.log("Hahahahahahahahahahahah")
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile6`)
        sprites.destroyAllSpritesOfKind(SpriteKind.Food)
        metrre_les_piece()
        info.changeScoreBy(paeclner * -1)
        paeclner = 0
    }
})
forever(function () {
    if (riendespecial == 0) {
        light.showAnimation(light.rainbowAnimation, 100)
    } else {
        pause(2000)
    }
    pause(100)
})
