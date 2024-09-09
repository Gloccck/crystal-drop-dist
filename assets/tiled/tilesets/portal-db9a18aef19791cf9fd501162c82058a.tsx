<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.5" tiledversion="1.5.0" name="portal" tilewidth="17" tileheight="42" spacing="2" margin="1" tilecount="6" columns="6">
 <image source="../../textures/portal/portal.png" width="128" height="64"/>
 <tile id="0">
  <properties>
   <property name="isInput" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index" id="2">
   <object id="1" x="3" y="8" width="11" height="26"/>
  </objectgroup>
  <animation>
   <frame tileid="0" duration="750"/>
   <frame tileid="1" duration="750"/>
  </animation>
 </tile>
 <tile id="2">
  <objectgroup draworder="index" id="2">
   <object id="1" x="3" y="8" width="11" height="26"/>
  </objectgroup>
  <animation>
   <frame tileid="2" duration="750"/>
   <frame tileid="3" duration="750"/>
  </animation>
 </tile>
</tileset>
