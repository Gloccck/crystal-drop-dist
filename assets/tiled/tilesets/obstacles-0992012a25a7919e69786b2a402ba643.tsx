<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.4" tiledversion="1.4.2" name="obstacles" tilewidth="51" tileheight="51" tilecount="3" columns="0">
 <grid orientation="orthogonal" width="1" height="1"/>
 <tile id="0">
  <image width="6" height="6" source="../../textures/obstacles/laser_base.png"/>
 </tile>
 <tile id="1">
  <image width="51" height="51" source="../../textures/obstacles/saw.png"/>
 </tile>
 <tile id="2">
  <image width="21" height="21" source="../../textures/obstacles/spikes.png"/>
  <objectgroup draworder="index" id="2">
   <object id="1" x="1" y="1" width="19" height="20"/>
  </objectgroup>
 </tile>
</tileset>
