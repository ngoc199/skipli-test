const { FieldValue } = require("firebase-admin/firestore");

/**
 * @param {FirebaseFirestore.Firestore} db
 */
function usersService(db) {
  const usersRef = db.collection("users");

  /**
   * @param {string} phoneNumber
   * @param {AccessCode} accessCode
   */
  async function addUser(phoneNumber, accessCode) {
    try {
      await usersRef.add({
        phoneNumber,
        accessCode: accessCode.toString(),
        verified: false,
      });
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * @param {string} phoneNumber
   */
  async function getUserByPhoneNumber(phoneNumber) {
    const userSnapshots = await usersRef
      .where("phoneNumber", "==", phoneNumber)
      .get();
    if (userSnapshots.empty) {
      throw new Error("User not found");
    }
    // Get only one user, since the phone number is unique
    const userDoc = userSnapshots.docs[0];
    const user = {
      id: userDoc.id,
      ...userDoc.data(),
    };
    return user;
  }

  /**
   * @param {string} phoneNumber
   * @param {AccessCode} accessCode
   *
   * @return {boolean} result
   */
  async function verifyUser(phoneNumber, accessCode) {
    try {
      const user = await getUserByPhoneNumber(phoneNumber);
      const accessCodeIsCorrect = accessCode.compare(user.accessCode);

      // Empty the access code if the access code is correct
      if (accessCodeIsCorrect) {
        await updateDoc(doc(usersRef, user.id), {
          accessCode: "",
          verified: true,
        });
      }
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  /**
   * @param {string} phoneNumber
   * @param {string} githubUserId
   */
  async function likeGithubUser(phoneNumber, githubUserId) {
    try {
      const userData = await getUserByPhoneNumber(phoneNumber);
      const userRef = usersRef.doc(userData.id);

      // Add Github user to the favorite list if it does not exist in the list.
      // Else remove the Github user from the list
      const hasGithubUser = userData.favoriteGithubUsers.includes(githubUserId);
      if (hasGithubUser) {
        await userRef.update({
          favoriteGithubUsers: FieldValue.arrayRemove(githubUserId),
        });
      } else {
        await userRef.update({
          favoriteGithubUsers: FieldValue.arrayUnion(githubUserId),
        });
      }
    } catch (err) {
      console.error(err);
      throw new Error();
    }
  }

  return {
    addUser,
    getUserByPhoneNumber,
    verifyUser,
    likeGithubUser,
  };
}

module.exports = usersService;
