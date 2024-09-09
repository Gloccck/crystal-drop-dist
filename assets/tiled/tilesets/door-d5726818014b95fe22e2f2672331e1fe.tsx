<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.4" tiledversion="1.4.2" name="door" tilewidth="21" tileheight="47" spacing="2" margin="1" tilecount="5" columns="5">
 <image source="../../textures/door/door.png" width="128" height="64"/>
 <tile id="0">
  <properties>
   <property name="openDirection" type="int" value="1"/>
  </properties>
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="21" height="42"/>
  </objectgroup>
 </tile>
 <tile id="2">
  <properties>
   <property name="openDirection" type="int" value="-1"/>
  </properties>
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="21" height="47"/>
  </objectgroup>
 </tile>
</tileset>
