import jwt


def create_token(username, password):
    encoded_token = jwt.encode(
        {'username': username, 'password': password}, 'SECRET', algorithm='HS256')
    return encoded_token


def decode_token(token):
    return jwt.decode(token, 'SECRET', algorithm=['HS256'])
