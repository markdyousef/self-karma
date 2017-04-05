import graphene

from graphene_django.types import DjangoObjectType
from .models import Profile


class ProfileType(DjangoObjectType):
    class Meta:
        model = Profile


class Query(graphene.AbstractType):
    all_profiles = graphene.List(ProfileType)

    def resolve_all_profiles(self, args, context, info):
        return Profile.objects.all()
