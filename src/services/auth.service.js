import firebase from 'firebase/app';
import 'firebase/auth';

export const googleProvider = new firebase.auth.GoogleAuthProvider();

class AuthService {
    login() {
        return firebase
            .auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                let token = result.credential.accessToken;
                let user = result.user;
                return this.detail(user, token);
            })
            .catch((err) => {
                console.log(err);
                return null;
            });
    }

    detail(user, token) {
        var session = {
            'token': token,
            'user': user,
        }
        sessionStorage.setItem('user', JSON.stringify(session));
        return session;
    }

    logout() {
        firebase
            .auth()
            .signOut()
            .then(() => {
                sessionStorage.removeItem('user');
            });
    }
}

export default new AuthService();
