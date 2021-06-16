import { db } from "../firebase";

class ScoreService {

    getScoreFromUser(userId) {
        var user = [];
        db.collection("score").where("userId", "==", userId).get().then(snapshot => {
            snapshot.forEach(doc => {
                user.push(doc.data());
            });
        });
        return user;
    }

    getRanking() {
        var ranking = [];

        db.collection("score").orderBy('score', 'desc').limit(10).get().then(snapshot => {
            snapshot.forEach(doc => {
                ranking.push({ userId: doc.data().uid, nombre:  doc.data().nombre, img:  doc.data().img, score:  doc.data().score });
            });
        });

        return ranking;
    }

    postScore(user, score) {

        return db.collection("score")
            .add({ userId: user.uid, nombre: user.displayName, img: user.photoURL, score: score })
            .then(() => {
                console.log("Document successfully written!");
                return true;
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
                return false;
            });
    }
}

export default new ScoreService();