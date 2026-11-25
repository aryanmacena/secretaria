self.addEventListener('push',e=>{let d={t:'🔔 Lembrete',b:''};try{d=e.data.json()}catch(x){}e.waitUntil(self.registration.showNotification(d.t,{body:d.b,tag:'l-'+d.t,requireInteraction:true,vibrate:[300,150,300]}))});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.matchAll({type:'window'}).then(l=>l.length?l[0].focus():clients.openWindow('./')))});
